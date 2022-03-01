const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        required: true,
        unique: true
    },
    prices:{
        indianPrice: String,
        europePrice: String,
    } ,
    year:
    {
        type: Number,
        default: 2021
    },
    tags:[String],

    authorName:
    {
        type:String,
        required:true,
        unique:true
    },
    totalPages: Number,
    stockAvailable:Boolean,
    default:false
},
{timestamps:true})

    
module.exports = mongoose.model('Books', BookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
