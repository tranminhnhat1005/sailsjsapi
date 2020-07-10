/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require ('bcrypt-nodejs');

module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    encryptedPassword: {
      type: 'string',
    },
  },

  customtoJSON: function () {
    var obj = this.toObject ();
    delete obj.encryptedPassword;
    return obj;
  },

  beforeCreate: function (values, cb) {
    if (
      !values.password ||
      !values.comfirmation ||
      values.password !== values.comfirmation
    ) {
      return cb ({err: 'Not match'});
    }
    bcrypt.hash (values.password, sait, 10, (err, hash) => {
      if (err) {return cb ({err: err});}
      values.encryptedPassword = hash;

      delete values.password;
      delete values.comfirmation;
      cb ();
    });
  },
};
