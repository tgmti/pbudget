const restful = require('node-restful')
const mongoose = restful.mongoose

const Transaction = new mongoose.Schema({
    execution_date : { type : Date, default : Date.now },
    due_date : { type : Date, default : Date.now },
    description : { type : String, required : true },
    category_id : {type : String, required : true },
    debit_account_id : { type : String },
    credit_account_id : { type : String },
    value : { type : Number, required : true, default : 0, min : 0 },
    consolidated : { type: Boolean, required : true, default : true },
    createdAt : { type : Date, default : Date.now }
});


module.exports = restful.model('Transaction', Transaction);