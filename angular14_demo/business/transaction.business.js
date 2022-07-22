
// const ofootbalBusiness = require('../oFootball/ofootballbusiness')
const mongo_client = require('./dbconnection')
const { ObjectId } = require("mongodb");

var getTransaction = function (cb) {
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection('Transactions').find({}).toArray(function (err, docs) {
      if (err) {
        client.close()
        handleError(res, err.message, "Failed to get transactions.");
      } else {
        client.close()
        return cb(docs)
      }
    });
  });
}

var getTransactionById = function (transactionId, cb) {
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection('Transactions').find({ _id: ObjectId(transactionId) }).toArray(function (err, docs) {
      if (err) {
        client.close()
        handleError(res, err.message, "Failed to get transaction.");
      } else {
        client.close()
        return cb(docs)
      }
    })
  })
}

var updateTransactionById = function (transactionId, transaction, cb) {
  const myquery = { _id: ObjectId(transactionId) };
  const newvalues = {
    "$set": { "name": transaction.name, "value": transaction.value, "category": transaction.category, "type": transaction.type, "description": transaction.description }
  };
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection("Transactions").updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      client.close()
      return cb("OK")
    });
  });
}

var createTransaction = function (transaction, cb) {
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection("Transactions").insert(transaction, function (err, res) {
      if (err) throw err;
      client.close()
      return cb(res)
    });
  });
}

var deleteTransactionById = function (transactionId, cb) {
  const myquery = { _id: ObjectId(transactionId) };
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection("Transactions").deleteOne(myquery, function (err, res) {
      if (err) throw err;
      client.close()
      return cb("OK")
    });
  });
}

function getDifferenceInDays(date1, date2) {
  // new Date(1382086394000)
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60 * 24);
}

module.exports = {
  getTransaction: getTransaction,
  getTransactionById: getTransactionById,
  createTransaction: createTransaction,
  updateTransactionById: updateTransactionById,
  deleteTransactionById: deleteTransactionById
}
