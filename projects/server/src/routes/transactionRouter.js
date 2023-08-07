const router = require("express").Router();
const { auth, isAdmin } = require("../middleware");
const { transactionController } = require("../controllers");

// Create new transaction
router.post("/", auth, transactionController.addTransaction);
// Get list of transaction in range
router.get("/", auth, isAdmin, transactionController.getTransactions);

module.exports = router;
