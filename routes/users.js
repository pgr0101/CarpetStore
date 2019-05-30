var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

/**
 * router middleware for jwt auth
 * */

router.use(function (req, res, next) {
  let token = req.headers['pgr-token'];
  if (token) {
    jwt.verify(token, "pgr0101secret", (err, decoded) => {
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
  //  returning all the carpets he added
  res.json({
    msg : 'all the carpets'
  });
});


router.post('/newCarpet' , function (req, res) {
  /**
   * TODO : adding new carpet plans
   *  handling normal things like price and color
   * */
  res.json({
    msg : "adding new carpet"
  });
});


router.post('/changeCarpet' , function (req, res) {
  /**
   * TODO : changing carpet color
   *  this is a filter
   * */
  res.json({
    msg : "changing carpet"
  });
});


router.post('/findbyplan' , function (req, res) {
  /**
   * TODO : finding carpets by
   *  plan likeness and maybe color similarity
   * */
  res.json({
    msg : "finding carpet by plan likeness"
  });
});


router.post('/bywithmoney', function (req, res) {
  /**
   * TODO : finding the more carpets
   *  user can by with the max money that has
   *  handling by Carpet.recommendCarpet
   * */
  res.json({
    msg : "recommending carpets with limited money"
  });
});


router.post('/mapsme' , function (req, res) {
  /**
   * TODO : finding nearest carpetStore and
   *  routing the user to there Map.mapsme
   * */
  res.json({
    msg : "routing the user to the nearest Store"
  });
});






/** for faze 2 : */
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
