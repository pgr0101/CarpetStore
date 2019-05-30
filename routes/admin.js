let router = require('express').Router();
var {PythonShell} = require('python-shell');
let path = require('path');
/**
 * TODO : special header for handling an
 *  auth for this part
 *  here just we try to set up the site
 * */



router.post('/map' , function (req, res) {
    floyd(req.body.data)
    resp.json({
        msg : "done and ready to use"
    });
});


function floyd(data) {

    // let data = {
    //     matrix: '0.99.99.1.99.0.2.99.3.99.0.99.99.2.99.0',
    //     count: 4
    // };
    data = JSON.stringify(data);
    let script = path.join(__dirname, '..', 'helpers' , 'floyd.py');
    let opt = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [data]
    };
    PythonShell.run(script, opt, function (err, results) {
        if (err) throw err;
        console.log('results: %j', results);
    });

    // TODO : saving the matrix to database for retrieving...
}



module.exports = router;