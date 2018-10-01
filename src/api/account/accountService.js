const Account = require('./account');

Account.methods(['get', 'post', 'put', 'delete'])
Account.updateOptions({new: true, runValidators: true})

module.exports = Account