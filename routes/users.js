var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Map = require('../models/Map');
var Carpet = require('../models/Carpet');

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
router.get('/', function (req, res) {
    // TODO : profile handling
    //  returning all the carpets s/he added
    res.json({
        msg: 'all the carpets'
    });
});

router.post('/newcarpet', function (req, res) {
    Carpet.newCarpet((!req.body.path ? null : req.body.path)
        , req.body.price, req.body.count, (err, carpet) => {

            if (err) {
                res.status(406).json({
                    msg: "something went wrong",
                    err: err
                });
            } else {
                res.status(406).json({
                    msg: "something went wrong",
                    carpet: carpet
                });
            }
        });
});

router.post('/countcarpet', async function (req, res) {
    try {
        await Carpet.countCarpets(req.body._id, req.body.count,
            function (err, carpet) {
                if (err) {
                    res.status(406).json({
                        msg: "something went wrong",
                        err: err
                    });
                } else {
                    res.status(406).json({
                        msg: "something went wrong",
                        carpet: carpet
                    });
                }
            });
    } catch (e) {
        res.status(406).json({
            msg: "something went wrong",
            err: e
        });
    }
});

router.post('/ratecarpet', async function (req, res) {
    try {
        await Carpet.rateCarpet(req.body._id, req.body.rate,
            function (err, carpet) {
                if (err) {
                    res.status(406).json({
                        msg: "something went wrong",
                        err: err
                    });
                } else {
                    res.status(406).json({
                        msg: "something went wrong",
                        carpet: carpet
                    });
                }
            });
    } catch (e) {
        res.status(406).json({
            msg: "something went wrong",
            err: e
        });
    }
});

router.get('/mapsme/:location', async function (req, res) {
    let location = parseInt(req.params.location);
    let router = await Map.mapsMe(location);
    res.json({
        msg: "routing the user to the nearest Store",
        router: router
    });
});

router.get('/bywithmoney/:money', async function (req, res) {
    let answer = await Carpet.recommendCarpet(parseInt(req.params.money));
    res.json({
        msg: "recommending carpets with limited money",
        answer : answer
    });
});


router.post('/changecarpet', function (req, res) {
    /**
     * TODO : changing carpet color
     *  this is a filter
     * */
    res.json({
        msg: "changing carpet"
    });
});

router.post('/findbyplan', function (req, res) {
    /**
     * TODO : finding carpets by
     *  plan likeness and maybe color similarity
     * */
    res.json({
        msg: "finding carpet by plan likeness"
    });
});


/** for faze 2 : */
router.post('/addtocart/:id', function (req, res) {
    /**
     * TODO : adding a product to cart
     *  and calculating the hole price
     * */
});

router.get('/buy', function (req, res) {
    /**
     * TODO : returning cart to the user
     *  and also payment options
     * */
});

router.post('/deletefromcart/:id', function (req, res) {
    /**
     * TODO : deleting a product from the cart
     *  of the user before payment
     * */
});

module.exports = router;
