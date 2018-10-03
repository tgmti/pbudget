const restful = require('node-restful')
const mongoose = restful.mongoose

const Transaction = new mongoose.Schema({
    execution_date : { type : Date, default : Date.now },
    due_date : { type : Date, default : Date.now },
    description : { type : String, require : true },
    category_id : { type: 'ObjectId', ref: 'Category', require: true},
    debit_account_id : { type: 'ObjectId', ref: 'Account', require: true },
    credit_account_id : { type: 'ObjectId', ref: 'Account', require: true },
    value : { type : Number, require : true, default : 0, min : 0 },
    consolidated : { type: Boolean, require : true, default : true },
    createdAt : { type : Date, default : Date.now }
});


module.exports = restful.model('Transaction', Transaction);