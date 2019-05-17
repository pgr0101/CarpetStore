var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'jwttest' });
});

router.post('/register', function(req, res) {
  if (req.body.username != "test" && req.body.password != '12345678' )
    return res.status(500).send("There was a problem registering the user.")

  var token = jwt.sign({ id: "test" }, "secret", {
    expiresIn: 86400 // expires in 24 hours
  });

  res.status(200).send({ auth: true, token: token });
});

router.get('/test', function(req, res) {

  var token = req.headers['pgr-token'];
  if (!token)
    return res.status(401).send(
        {
          auth: false,
          message: 'No token provided.'
        });

  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send(
        {
          auth: false,
          message: 'Failed to authenticate token.'
        });

    res.status(200).send(decoded);
  });
});

module.exports = router;
