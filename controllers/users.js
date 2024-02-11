const User = require('../models/user');

// CRUD will happen in here

// Getting all users
const getAllUser = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((error) => console.warn(error));
};

// Getting user by id
const getUserById = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.status(200).json({ user: user });
    })
    .catch((error) => console.warn(error));
};

// Creating user
const createUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  User.create({
    name: name,
    email: email,
  })
    .then((result) => {
      console.log('Creating user');
      return res.status(201).json({
        message: 'User created successfully',
        user: result,
      });
    })
    .catch((error) => {
      console.warn(error);
    });
};

// Updating user
const updateUser = (req, res, next) => {
  const userId = req.params.userId;
  const newName = req.body.name;
  const newEmail = req.body.email;

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      user.name = newName;
      user.email = newEmail;

      return user.save();
    })
    .then((result) => {
      res.status(200).json({
        message: 'User updated',
        user: result,
      });
    })
    .catch((error) => console.warn(error));
};

// Deleting user
const deleteUser = (req, res, next) => {
  const UserId = req.params.userId;

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      return User.destroy({
        where: {
          id: userId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: 'User deleted' });
    })
    .catch((error) => console.warn(error));
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
