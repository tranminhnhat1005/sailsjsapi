const jwt = require ('jsonwebtoken');

module.exports = {
  sign: function (payload) {
    return jwt.sign (
      {
        data: payload,
      },
      'nakdeptrai',
      {expiresIn: '2d'}
    );
  },
  verify: function (token, cb) {
    jwt.verify (token, 'nakdeptrai', cb);
  },
};
