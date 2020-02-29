// imports
const express = require('express');
const router = express.Router();

// importing controllers
const { getTransactions } = require('../app/controllers/transactions/GetTransactions');
const { createTransactions } = require('../app/controllers/transactions/CreateTransactions');
const { deleteTransactions } = require('../app/controllers/transactions/DeleteTransactions');

router
  .route('/')
  .get(getTransactions)
  .post(createTransactions);

router
  .route('/:id')
  .delete(deleteTransactions);

module.exports = router;