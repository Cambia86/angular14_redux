var MongoClient = require('mongodb').MongoClient;


var getMongoClientConnection = function (cb) {
  try {

    var _conn = "mongodb+srv://cambia86:Password01@cluster0.z7jhh.mongodb.net/HomeManagement?retryWrites=true&w=majority";

    MongoClient.connect(_conn, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, function (err, client) {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      cb(client);
    });
  } catch (error) {
    let err = error;
  }
}

module.exports = {
  getMongoClientConnection: getMongoClientConnection
}



