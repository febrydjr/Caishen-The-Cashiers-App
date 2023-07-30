const db = require("../../../models");
const { messages } = require("../../helpers");

const products = db["product"];

async function getProduct(id) {
    const result = await products.findOne({ where: { id } });
    if (!result) return messages.error(404, "Product Not Found");
    return messages.success("", result);
}

module.exports = getProduct;
