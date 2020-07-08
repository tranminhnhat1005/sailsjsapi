/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const User = require("../models/User");
const jwt = require ('jsonwebtoken');

module.exports = {
  // use: function (req, res, next) {
  //   if (
  //     req.headers &&
  //     req.headers.authorization &&
  //     req.headers.authorization.split (' ')[0] === 'JWT'
  //   ) {
  //     jsonwebtoken.verify (
  //       req.headers.authorization.split (' ')[1],
  //       'RESTFULAPIs',
  //       (err, decode) => {
  //         if (err) {req.user = undefined;}
  //         req.user = decode;
  //         next();
  //       }
  //     );
  //   } else {
  //     req.user = undefined;
  //     // eslint-disable-next-line callback-return
  //     next();
  //   }
  // },
  // loginRequired: function (req, res, next) {
  //   if (req.user) {
  //     // eslint-disable-next-line callback-return
  //     next ();
  //   } else {
  //     return res.status (401).json ({message: 'Unauthorized user!'});
  //   }
  // },
  login: async function (req, res) {
    var username = req.param.username;
    var password = req.param.password;
    var logedin = await User.find ({
      where: {username: username, password: password},
    });
    if (!logedin) {
      res
        .status (401)
        .json ({
          message: 'Authentication failed. Username or Password is not correct.',
        });
    } else {
      return res.json ({
        token: jwt.sign (
          {username: username, password: password},
          'RESTFULAPIs'
        ),
      });
    }
  },
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
