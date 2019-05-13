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

        count : {
            type : Number ,
            required : true
        },

        rate : {
            type : Number ,
        }
    }
);


let Carpet = module.exports = mognoose.model('Carpet' , carpetSchema);

module.exports.recommendCarpet = async function(cash) {
    // TODO retuns a map of carpet price and count
};


