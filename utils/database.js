require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.POSTGRESDB,
  process.env.POSTGRESUSER,
  process.env.POSTGRESPASSWORD,
  {
    host: process.env.POSTGRESHOST,
    dialect: 'postgres',
  }
);

console.log(
  process.env.POSTGRESDB,
  process.env.POSTGRESUSER,
  process.env.POSTGRESPASSWORD
);

module.exports = sequelize;
