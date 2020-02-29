const Transaction = require('../../models/Transaction');

// @desc    Add a transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.createTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body)

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(422).json({
        success: false,
        error: messages
      });
    }

    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}