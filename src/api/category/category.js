const restful = require('node-restful')
const mongoose = restful.mongoose

const Category = new mongoose.Schema({
    name : { type : String, required : true },
    parent_id : { type : String, default : '' },
    createdAt : { type : Date, default : Date.now }
});


module.exports = restful.model('Category', Category);