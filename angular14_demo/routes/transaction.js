const express = require('express');
const router = express.Router();

const transaction_controller = require('../controllers/transaction');

router.get('/getTransaction', transaction_controller.retrieveTransaction);
router.get('/getTransaction/:transactionId', transaction_controller.retrieveTransactionById);
router.post('/updateTransactionById/:transactionId', transaction_controller.updateTransactionById);
router.post('/createTransaction/', transaction_controller.createTransaction);
router.delete('/:transactionId', transaction_controller.deleteByTransactionById);

module.exports = router;
