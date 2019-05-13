var express = require('express');
var router = express.Router();
var user = require('../models/user');
var jwt = require('jsonwebtoken');

router.post('/login' , function (req, res) {
  // TODO login a user jwt
  let answer = signinAnswer(req.username , req.password);
  if(asnwer){
    let token = jwt.sign(
          {
            username : req.username
          },
          'thispgr0101secret',
          {
            expires : '24h',
          },
        );
    res.json({
      'msg' : "logged in" ,
      'token' : token
    });
  }else{
    res.status(403).json({
      'msg' : 'access denied'
    });
  }
});

router.post('/signup' , function (req, res) {
  // TODO register an instance of user.model
  registerUser(req.body.username , req.body.password,function(err , user){
    if(err){
      res.status(406).json({
        'msg' : "a problem happened",
        'errors' : err
      });
    }else {
      res.json({
        'msg' : "user registered successfully",
      })
    }
  });
});

router.get('/logout/:username' , function (req ,res) {
  // TODO logout jwt ... req.params.username
});

module.exports = router;

/*
 app.get('/download', function(req, res){
  var file = __dirname + '/upload-folder/dramaticpenguin.MOV';
  res.download(file); // Set disposition and send it.
});

 // Use child_process.spawn method from
    // child_process module and assign it
    // to variable spawn
    var spawn = require("child_process").spawn;

    // Parameters passed in spawn -
    // 1. type_of_script
    // 2. list containing Path of the script
    //    and arguments for the script

    // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will
    // so, first name = Mike and last name = Will
    var process = spawn('python',["./hello.py",
                            req.query.firstname,
                            req.query.lastname] );

    // Takes stdout data from script which executed
    // with arguments and send this data to res object
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    } )



    python :
    import sys
# Takes first name and last name via command
# line arguments and then display them
print("Output from Python")
print("First name: " + sys.argv[1])
print("Last name: " + sys.argv[2])

 */