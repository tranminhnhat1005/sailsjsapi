/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const jwt = require ('../services/jwt');

module.exports = {
  register: async (req, res) => {
    let user = req.body;
    try {
      await User.create (user);
    } catch (error) {
      res.send ({error: error});
    }
    return res.json ({user: user});
  },

  login: async (req, res) => {
    let user = await User.findOne ({username: req.body.username});
    if (user) {
      let password = req.body.password;
      if (!password || password !== user.password) {
        return res.send ('Not found this user.');
      } else {
        var token = jwt.sign (user);
        // localStorage.setItem('token', token);
        return res.json ({
          user: user,
          token: token,
        });
      }
    }
  },
};
