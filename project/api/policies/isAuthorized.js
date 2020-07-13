const jwt = require ('../services/jwt');

module.exports = async (req, res, next) => {
  let token;
  if (req.headers && req.headers.authorization) {
    let parts = req.headers.authorization.split (' ');
    if (parts.length === 2) {
      let scheme = parts[0];
      let credentials = parts[1];

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
