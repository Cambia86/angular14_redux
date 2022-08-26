
var express = require("express");
var bodyParser = require("body-parser");

var jwt = require('jsonwebtoken');
var mongodb = require("mongodb");
// const competition = require('./routes/competition.route'); // Imports routes for the products
// const match = require('./routes/match.route');
// const config = require('./models/config')
// let middleware = require('./middleware/middleware');
// const standing = require('./routes/standing.route');
// const adminroute = require('./routes/admin.route');
// const statisticroute = require('./routes/statistic.route');
const category = require('./routes/category')
const transaction = require('./routes/transaction');
const account = require('./routes/account');
const config = require('./config')
// var ObjectID = mongodb.ObjectID;
var cors = require('cors')
// var CONTACTS_COLLECTION = "standings";

function main() {
  var app = express();
  // let handlers = new HandlerGenerator();
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));

  app.use(bodyParser.json());
  app.use(cors())
  // link to angular build directory
  var distDir = __dirname + "/dist/angular14_demo";
  app.use(express.static(distDir));

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Create a database variable outside of the database connection callback to reuse the connection pool in your app.
  var db;

  // Connect to the database before starting the application server.
  mongodb.MongoClient.connect(process.env.MONGODB_URI ||
    "mongodb+srv://cambia86:Password01@cluster0.z7jhh.mongodb.net/?retryWrites=true&w=majority",
    function (err, client) {
      console.log("logged mongodb");
      if (err) {
        console.log(err);
        process.exit(1);
      }

      // Save database object from the callback for reuse.
      db = client.db();
      client.close()
      console.log("Database connection ready");

      // Initialize the app.
      // var server = app.listen(process.env.PORT || 8083, function () {
      //   var port = server.address().port;
      //   console.log("App now running on port", port);
      // });
    });

  app.get("/test", function (req, res) {
    res.status(200).json({ "test": "ok" });
  });

  // app.use('/api/transaction', middleware.checkToken, standing_v2)
  app.use('/api/transaction', transaction)
  app.use('/api/category', category)
  app.use('/api/account', account)

  var server = app.listen(process.env.PORT || 8084, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
}

main();
