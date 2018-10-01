const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento 
    const Category = require('../api/category/categoryService')
    Category.register(router, '/category')
    const Account = require('../api/account/accountService')
    Account.register(router, '/account')
}