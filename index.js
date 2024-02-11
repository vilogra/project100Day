const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./utils/database');
const User = require('./models/user');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Default route
app.get('/', (req, res, next) => {
  res.send('Default route');
});

// CRUD routes
app.use('/users', require('./routes/users'));

// Error handling
app.use((error, req, res, next) => {
  console.warn(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({
    message: message,
  });
});

// Syncing database
sequelize
  .sync()
  .then((result) => {
    console.info('Database connected');
    app.listen(3000);
  })
  .catch((error) => console.warn(error));
