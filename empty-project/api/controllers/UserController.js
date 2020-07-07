/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const User = require("../models/User");

module.exports = {
  users: async function (req, res) {
    try {
      var users = await User.find ();
      res.send (users);
    } catch (err) {
      res.serverError (err.toString ());
    }
  },
  findUserByUsername: async function (req, res) {
    var username = req.param ('username');
    var userByUsername = await User.find ({
      where: {username: username},
    });
    if (userByUsername) {
      res.send (userByUsername);
    } else {
      res.send ('Not found user by username: ' + username);
    }
  },
  create: async function (req, res) {
    var username = req.param ('username');
    var password = req.param ('password');
    var email = req.param ('email');
    var createdUser = await User.create ({
      username: username,
      password: password,
      email: email,
    }).fetch ();

    if (createdUser) {
      res.redirect ('/');
    }
  },
  updateEmail: async function (req, res) {
    var username = req.param ('username');
    var email = req.param ('email');
    await User.update ({username: username}).set ({email: email});
    res.send ('Update successful');
  },
  deleteByUsername: async function (req, res) {
    var username = req.param ('username');
    await User.destroy ({username: username});
    res.send ('Delete successful');
  },
};
