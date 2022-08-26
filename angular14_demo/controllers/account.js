
const account_business = require('../business/account.business');
var uuid = require('uuid');
const { login } = require('../business/account.business');
var jwt = require('jsonwebtoken');
const config = require('../config')

exports.signup = function (req, res) {
  let userId = uuid.v4();// req.params.transactionId
  // let user = req.body.account;

  let user = {
    id: userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password
  }

  account_business.signup(user, (data) => {
    loginfunct(user.userName, user.password, res);
    // res.send({ ...user });
  });
}

function loginfunct(userName, password, res) {
  account_business.login(userName, password, (data) => {
    if (data && data.userName) {
      let token = jwt.sign({ userName: data.userName, },
        config.secret,
        {
          expiresIn: '24h' // expires in 24 hours
        }
      );
      // return the JWT token for the future API calls
      res.json({
        success: true,
        message: 'Authentication successful!',
        token: token,
        id: 1,
        username: data.userName,
        password: "****",
        firstName: data.firstName,
        lastName: data.lastName
      });
    } else {
      res.send(403).json({
        success: false,
        message: 'Incorrect username or password'
      });
    }
  });
}

exports.login = function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  loginfunct(username, password, res);
}
