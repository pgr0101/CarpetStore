var mongoose = require('mongoose');


let MapSchema = mongoose.Schema({
    map : {

    } ,

    routing : {

    }
});


expors.Map = mongoose.Model('Map' , MapSchema);


exports.mapsMe = function(location){
    // TODO : retrieving the matrix has been sorted with floyd
}; 