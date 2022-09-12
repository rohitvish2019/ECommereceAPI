/* required mongoose for interacting with MongoDB */

const mongoose = require('mongoose');

/* Creating schema */

let ProducsSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    }
},
{
    timestamps:true
}
);

/* setting schema as mongoose model */

const Products = mongoose.model('Products', ProducsSchema);

/* Exporting schema to be used outside */

module.exports = Products;
