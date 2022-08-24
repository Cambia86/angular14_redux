
// const ofootbalBusiness = require('../oFootball/ofootballbusiness')
const mongo_client = require('./dbconnection')
const { ObjectId } = require("mongodb");

var getCategory = function (cb) {
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection('Category').find({}).toArray(function (err, docs) {
      if (err) {
        client.close()
        handleError(res, err.message, "Failed to get Category.");
      } else {
        client.close()
        return cb(docs)
      }
    });
  });
}

var getCategoryById = function (categoryId, cb) {
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection('Category').find({ _id: ObjectId(categoryId) }).toArray(function (err, docs) {
      if (err) {
        client.close()
        handleError(res, err.message, "Failed to get Category.");
      } else {
        client.close()
        return cb(docs)
      }
    })
  })
}

var updateCategoryById = function (categoryId, category, cb) {
  const myquery = { id: categoryId }// { _id: ObjectId(transactionId) };
  const newvalues = {
    "$set": { "name": category.name, "description": category.description }
  };
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection("Category").updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      client.close()
      return cb("OK")
    });
  });
}

var createCategory = function (category, cb) {
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection("Category").insertOne(category, function (err, res) {
      if (err) throw err;
      client.close()
      return cb(res)
    });
  });
}

var deleteCategoryById = function (categoryId, cb) {
  // const myquery = { _id: ObjectId(transactionId) };
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection("Category").deleteOne({ id: categoryId }, function (err, res) {
      if (err) throw err;
      client.close()
      return cb(res)
    });
  });
}

function getDifferenceInDays(date1, date2) {
  // new Date(1382086394000)
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60 * 24);
}

module.exports = {
  getCategory: getCategory,
  getCategoryById: getCategoryById,
  createCategory: createCategory,
  updateCategoryById: updateCategoryById,
  deleteCategoryById: deleteCategoryById
}
