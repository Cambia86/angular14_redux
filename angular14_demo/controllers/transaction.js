

const transaction_business = require('../business/transaction.business');
var uuid = require('uuid');

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
  let transaction = req.body.transaction;
  transaction_business.updateTransactionById(transactionId, transaction, (data) => {
    res.send({ results: data });
  });
}

exports.createTransaction = function (req, res) {
  let transactionId = uuid.v4();// req.params.transactionId
  let transaction = req.body.transaction;
  transaction.id = transactionId;
  transaction_business.createTransaction(transaction, (data) => {
    res.send({ transactionId: transactionId });
  });
}

exports.deleteByTransactionById = function (req, res) {
  let transactionId = req.params.transactionId
  transaction_business.deleteTransactionById(transactionId, (data) => {
    res.send(data);
  });
}


