const restful = require('node-restful')
const mongoose = restful.mongoose

const Account = new mongoose.Schema({
    name : { type : String, required : true },
    type : { type : String, required : true, uppercase : true,
        enum : ['WALLET', 'INVESTMENT', 'DEBT'] },
    createdAt : { type : Date, default : Date.now }
});


module.exports = restful.model('Account', Account);