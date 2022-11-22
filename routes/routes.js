const express = require("express");
const router = express.Router();
const TransactionController = require("../controller/transaction");

router.post("/retailerId", TransactionController.updateRetailerId)

router.post("/transactionStatus", TransactionController.updateTransactionStatus)

module.exports = router