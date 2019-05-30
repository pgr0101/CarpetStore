let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');


let UserSchema = mongoose.Schema({
    username : {
        type : String ,
        unique : true ,
        required : true
    } ,

    password : {
        type : String,
        required : true
    } ,

    carpets : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'Carpet'
    }]

});

var User = mongoose.model(
    "User" ,
    UserSchema);

module.exports = User;

module.exports.register = function(userDoc, cb){
    bcrypt.hash(userDoc.password , 10 , function (err, hash) {
        if(!err){
            userDoc.password = hash;
            userDoc.save(cb);
        }
    });
};

module.exports.getUserByusername =  function(username , cb){
    User.findOne({username : username} , cb);
};

module.exports.authenticate = async function(username , password){
  let user = await User.findOne({username : username});
  if(user){
      let flag = await bcrypt.compare(password , user.password);
      return flag;
  }else{
      return false;
  }
};

exports.addCarpet = function(){
  // TODO : adding a path to carpets
};

/** improving the project later*/

/**

 cart : [
 {
                type: mongoose.Schema.Types.ObjectId,
                ref : 'Carpet'
            }
 ],

 transaction : [
 {
                type : mongoose.Schema.Types.ObjectId
            }
 ]

 */
function removeFromCart(username, objectId) {
    // TODO remove item form user cart
};

function addToCart(username , carpetId) {
    // TODO adding items he want to buy
};

function endBuy(username) {
    // TODO add a transaction and also clear cart
    // and also print for sends
};