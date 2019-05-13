let mongoose = require('mongoose');

let transactionSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.objectId,
            ref: 'User',
            required: true
        },

        price: {
            type: Number,
            required: true
        },


        description: [
            {
                tyep : String
            }
        ]
    }
);



let Transaction = module.exports
                = mongoose.model('Transaction', transactionSchema);


module.exports.newTransaction = function(username , price , description) {
    // TODO when we sold something we make a new
};
