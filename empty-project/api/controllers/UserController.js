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
  findUserById: async function (req, res) {
    var userid = req.param ('userid');
    var userById = await User.find ({
      where: {userid: userid},
    });
    if (userById) {
      res.send (userById);
    } else {
      res.send ('Not found user by id: ' + userid);
    }
  },
  create: async function (req, res) {
    var userid = req.param ('userid');
    var username = req.param ('username');
    var password = req.param ('password');
    var email = req.param ('email');
    if (userid === undefined || userid === '') {
      return res.json ({
        status: 'error',
        message: 'ID is empty',
      });
    }
    if (username === undefined || username === '') {
      return res.json ({
        status: 'error',
        message: 'Username is empty',
      });
    }
    if (password === undefined || password === '') {
      return res.json ({
        status: 'error',
        message: 'Password is empty',
      });
    }
    var createdUser = await User.create ({
      userid: userid,
      username: username,
      password: password,
      email: email,
    }).fetch ();

    if (createdUser) {
      res.send ('Done');
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
