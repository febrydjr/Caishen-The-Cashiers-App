const db = require("../../../models");

const transactions = db["transaction"];
const transaction_items = db["transaction_item"];

async function getTransactions(queries) {
    const {start_date, end_date} = queries;
}

module.exports = getTransactions;
