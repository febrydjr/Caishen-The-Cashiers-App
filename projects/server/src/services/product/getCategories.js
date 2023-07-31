const db = require("../../../models");
const { messages } = require("../../helpers");

const categories = db["category"];

async function getCategories() {
    return messages.success(await categories.findAll());
}

module.exports = getCategories;
