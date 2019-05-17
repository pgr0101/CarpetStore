let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');


let userSchema = mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true
        },

        password : {
            type : String,
            required: true
        },

        carpets :[
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Carpet'
            }
        ],

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

    }
);



let User = module.exports = mongoose.model('User' ,userSchema);


/**
 * register a new user in signup method
 * callback(err , user){}
 * @param username
 * @param password
 * @param cb
 */
function registerUser(username , password , cb){
    let user = new User;
    user.username = username;
    user.password = _hashedPassword(password);
    user.save(cb);
}

/**
 * username and password from request
 * returns boolean that if user can sign in or not
 * @param username
 * @param password
 * @param cb
 */
module.exports.signinAnswer = async function(username, password){
    let user = findUser();
    if(_comparePassword(password , user.password)){
        return true;
    }
    return false;
};

async function _hashedPassword(password){
    let hashed = await bcrypt.hash(password , 10);
    return hashed;
};

async function _comparePassword(candidate , password){
    let answer = await bcrypt.compare(password ,candidate);
    return answer;
};

module.exports.findUser =  function(username , cb) {
    User.find({username : username} , cb);
};

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