const mongoose = require('mongoose');

const productSchemma = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    }, 
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    newPrice:{
        type:Number,
        required:true,
    },
    oldPrice:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    }
    
},{timestamps:true})

const Product = mongoose.model('product', productSchemma);

module.exports = Product;