let mongoose = require('mongoose');


let carpetSchema = mongoose.Schema(
    {

        path : {
            type : String,
            required : true
        } ,

        price : {
            type : Number ,
            required : true
        } ,

        rate : {
            type : Number ,
        } ,

        count : {
            type : Number
        }
    }
);


let Carpet = mongoose.model('Carpet' , carpetSchema);
module.exports = Carpet;


module.exports.recommendCarpet = async function(cash) {
    let carpets = await Carpet.find({}).sort({price : 1});
    let answer = {}; // dict of => count : carpet
    try{
        carpets.forEach((carpet)=>{
            let cnt = carpet.count;
            let price = carpet.price;
            if(cash < price){
                throw "err";
            }else{
                let i = 1;
                while(true){
                    if(i*price > cash || i > cnt){
                        i--;
                        break;
                    }
                    i++;
                }
                cash -= i*price;
                answer[carpet] = i;
            }
        });
    }catch (e) {
        console.log(e);
    }

    return answer;
};

module.exports.newCarpet = function(path , price , count , cb){
    let carpet = new Carpet({
       path : path ,
       price : price ,
       count : count ,
       rate : 0
    });
    carpet.save(cb);
};

module.exports.countCarpets = async function (_id , count , cb) {
    let carpet = await Carpet.findOne({_id : _id});
    if(carpet.count + count < 0){
        throw "count can't be negative";
        return;
    }else{
        let carpet = await Carpet.findOne({_id : _id});
        carpet.rate = (carpet.rate+rate)/2;
        carpet.save(cb);
    }

};

module.exports.rateCarpet = async function (_id , rate , cb) {
    if(rate < 0){
        throw "rate shouldn't be negative";
        return;
    }else{
        let carpet = await Carpet.findOne({_id : _id});
        carpet.rate = (carpet.rate+rate)/2;
        carpet.save(cb);
    }
};


