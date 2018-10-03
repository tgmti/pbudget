const restful = require('node-restful')
const Transaction = require('./transaction');
var Account = require('../account/accountService');
var Category = require('../category/categoryService');


let validPost = function(req, res, next) {
    
    if (!req.body.category_id) return next({ status: 400, err: "Transaction need a Category" });
    
    // Verifica se a categoria existe
    Category.findById(req.body.category_id, function(err, model) {
        if (!model) return next(restful.objectNotFound());
        return next();
    });
    
//TODO: Ajustar a busca para fazer a validação
//        debit_account_id
//        credit_account_id
        
    };

let validPut = validPost;
    
Transaction.methods(
    ['get', 'delete',{ method: 'post', before: validPost }, { method: 'put', before: validPut }]);
Transaction.updateOptions({new: true, runValidators: true});

module.exports = Transaction