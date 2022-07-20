

const transaction_business = require('../business/transaction.business');

exports.retrieveTransaction = function (req, res) {
  transaction_business.getTransaction((data) => {
    res.send(data);
  });
}

exports.retrieveTransactionById = function (req, res) {
  let transactionId = req.params.transactionId
  transaction_business.getTransactionById(transactionId, (data) => {
    res.send(data);
  });
}

exports.updateTransactionById = function (req, res) {
  let transactionId = req.params.transactionId
  let transaction = req.body;
  transaction_business.updateTransactionById(transactionId, transaction, (data) => {
    res.send(data);
  });
}

exports.deleteByTransactionById = function (req, res) {
  let transactionId = req.params.transactionId
  transaction_business.deleteTransactionById(transactionId, (data) => {
    res.send(data);
  });
}


