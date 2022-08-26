const mongo_client = require('./dbconnection')
const { ObjectId } = require("mongodb");

var signup = function (user, cb) {
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection("Users").insertOne(user, function (err, res) {
      if (err) throw err;
      client.close()
      return cb(res)
    });
  });
}

var login = function (username, password, cb) {
  mongo_client.getMongoClientConnection(function (client) {
    client.db().collection("Users").findOne({ userName: username, password: password }, function (err, result) {
      if (err) throw err;
      else {
        cb(result);
        client.close()
      }
    });
    // client.db().collection("Users").find({ userName: username, password: password }).toArray(function (err, docs) {
    //   if (err) {
    //     client.close()
    //     handleError(res, err.message, "Failed to get transaction.");
    //   } else {
    //     client.close()
    //     return cb(docs)
    //   }
    // })
  });
}

module.exports = {
  signup: signup,
  login: login
}
