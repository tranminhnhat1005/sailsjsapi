const jwt = require ('../services/jwt');

module.exports = async function (req, res, next) {
  var token;
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split (' ');
    if (parts.length === 2) {
      var scheme = parts[0];
      var credentials = parts[1];

      if (/^Bearer$/i.test (scheme)) {
        token = credentials;
      }
    } else {
      return res.json (401, {err: 'Format is Authorization: Bearer [token]'});
    }
  } else {
    return res.json (401, {err: 'No Authorization header was found'});
  }
  jwt.verify (token, (err, decoded) => {
    if (err) {
      return res.json (401, {err: 'Invalid token'});
    }
    req.user = decoded;
    next ();
  });
};
