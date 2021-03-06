var mongoose = require('mongoose');
let {PythonShell} = require('python-shell');
let path = require('path');

let MapSchema = mongoose.Schema({

    count: {
        type: Number
    },

    matrix: {
        type: String
    },

    routing: {
        type: String
    },

    stores: {
        type: String
    }
});


var Map = module.expors = mongoose.model('Map', MapSchema);

exports.register = function (data , cb) {

    floyd(data , function (err, result) {
        if (!err) {
            result = JSON.parse(result);
            let map = new Map({
                count: data.count,
                stores: data.stores,
                matrix: JSON.stringify(result.matrix),
                routing: JSON.stringify(result.router)
            });
            map.save(cb);
        }
    });
};

exports.mapsMe = async function (location) {
    let map = await Map.findOne({});
    let router = JSON.parse(map.routing);
    let temp;
    let stores = [];
    temp = map.stores.split('.');
    temp.forEach((t)=>{
        stores.push(parseInt(t)-1);
    });
    let matrix = JSON.parse(map.matrix);
    location--;
    return retrieve(location , router , stores , matrix);
};


function floyd(data , cb) {
    data = JSON.stringify(data);
    let script = path.join(__dirname, '..', 'helpers', 'floyd.py');
    let opt = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [data]
    };
    PythonShell.run(script, opt, cb);
}


function retrieve(location , router , stores , matrix){
    let answer = 99;
    let temp = [];
    let arr = [];
    stores.forEach((s)=>{
        if(matrix[location][s] < answer){
            answer = s;
        }
    });
    function ret(der , des){
        if(router[der][des] != 0){
            ret(der , router[der][des]);
            arr.push(router[der][des]);
            ret(router[der][des] , des);
        }
    }
    ret(location , answer);
    temp.forEach((t)=>{
        arr.push(t+1);
    });
    arr.push(answer+1);
    return arr;
} 