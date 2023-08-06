const { messages } = require("../helpers");
const { transactionService } = require("../services");

async function createTransaction(req, res) {
    try {
        const result = await transactionService.createTransaction();
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTransactions(req, res) {
    try {
        const result = await transactionService.getTransactions();
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createTransaction,
    getTransactions,
}