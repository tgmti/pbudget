const restful = require('node-restful')
const mongoose = restful.mongoose

const Category = new mongoose.Schema({
    name : { type : String, required : true },
    createdAt : { type : Date, default : Date.now },
    parent : { type : String, default : '' },
    credit : { type : Boolean, default : false }
});


module.exports = restful.model('Category', Category);