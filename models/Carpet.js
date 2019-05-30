let mongoose = require('mongoose');


let carpetSchema = mongoose.Schema(
    {
        carpetId : {
            type : Number,
            required : true,
            unique : true
        },

        path : {
            type : String,
            required : true
        } ,

        price : {
            type : String ,
            required : true
        } ,

        rate : {
            type : Number ,
        }
    }
);


let Carpet = module.exports = mognoose.model('Carpet' , carpetSchema);

module.exports.recommendCarpet = async function(cash) {
    // TODO : returns a map of count and carpet
    // TODO : bag algorithm
};

exports.newCarpet = function(){
  // TODO : making a new carpet and saving it
};


