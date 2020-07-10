/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require ('bcrypt-nodejs');
// const User = require ('../models/User');

module.exports = {
  check: function (req, res) {
    //console.log(req.user);
    return res.json (req.user);
  },

  register: async function (req, res) {
    await User.create (req.body).exec ((err, user) => {
      if (err) {
        return res.json({
          err: err,
        });
      }
      return res.json (user);
    });
  },

  login: async function (res, req) {
    await User.findOne ({username: req.body.username})
      .then ((user) => {
        bcrypt.compare (
          req.body.password,
          user.encryptedPassword,
          // eslint-disable-next-line handle-callback-err
          (err, result) => {
            if (result) {
              return res.json ({
                user: user,
                token: jwt.sign (user),
              });
            } else {
              return res.forbidden ({err: 'Something was wrong'});
            }
          }
        );
      })
      .catch (() => {
        return res.forbidden ({err: 'Something was wrong'});
      });
  },
};
