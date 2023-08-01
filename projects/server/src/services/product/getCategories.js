const db = require("../../../models");
const { messages } = require("../../helpers");

const categories = db["category"];

async function getCategories() {
    const result = await categories.findAll();
    return messages.success("", result);
}

module.exports = getCategories;
