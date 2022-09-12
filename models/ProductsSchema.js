const mongoose = require('mongoose');

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

const Products = mongoose.model('Products', ProducsSchema);
module.exports = Products;
