/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// const bcrypt = require('bcryptjs');
// const bcrypt = require ('bcrypt-nodejs');

module.exports = {
  attributes: {
    username: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      minLength: 6,
      maxLength: 20,
      required: true,
    },
    email: {
      type: 'string',
      maxLength: 30,
      // unique: true,
    },
  },
};
