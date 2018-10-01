const Transaction = require('./transaction');

Transaction.methods(['get', 'post', 'put', 'delete'])
Transaction.updateOptions({new: true, runValidators: true})

module.exports = Transaction