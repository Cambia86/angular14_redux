const express = require('express');
const router = express.Router();

const account_controller = require('../controllers/account');

router.post('/login', account_controller.login);
router.post('/signup', account_controller.signup);

module.exports = router;
