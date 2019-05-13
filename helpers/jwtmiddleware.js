let jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

  if (token) {
    jwt.verify(token, "thispgr0101secret", (err, decoded) => {
      if (err) {
        return res.status(403).json({
          msg: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      msg: 'Auth token did not found'
    });
  }
};

module.exports = {
  checkToken: checkToken
}