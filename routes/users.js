var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/**
 * router middleware for jwt auth
 * */

router.use(function (req, res, next) {
  let token = req.headers['pgr-token'];
  if (token) {
    jwt.verify(token, "thispgr0101secret", (err, decoded) => {
      if (err) {
        res.status(403).json({
          msg: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).json({
      msg: 'Access denied'
    });
  }
});


/* GET users listing. */
router.get('/', function(req, res) {
  // TODO : profile handling
  res.send('respond with a resource');
});


router.post('/newCarpet' , function (req, res) {
  /**
   * TODO : adding new carpet plans
   *  handling normal things like price and color
   * */
});


router.post('/changeCarpet' , function (req, res) {
  /**
   * TODO : changing carpet color
   *  this is a filter
   * */
});


router.post('/findbyplan' , function (req, res) {
  /**
   * TODO : finding carpets by
   *  plan likeness and maybe color similarity
   * */
});


router.post('/bywithmoney', function (req, res) {
  /**
   * TODO : finding the more carpets
   *  user can by with the max money that has
   * */
});


router.post('/mapsme' , function (req, res) {
  /**
   * TODO : finding nearest carpetStore and
   *  routing the user to there
   * */
});


router.post('/addtocart/:id' , function (req, res) {
  /**
   * TODO : adding a product to cart
   *  and calculating the hole price
   * */
});

router.get('/buy' ,function (req, res) {
  /**
   * TODO : returning cart to the user
   *  and also payment options
   * */
});

router.post('/deletefromcart/:id' , function (req, res) {
  /**
   * TODO : deleting a product from the cart
   *  of the user before payment
   * */
});



module.exports = router;
