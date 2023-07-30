const { messages } = require("../../helpers");
const db = require("../../../models");

const products = db["product"];

async function getProducts(req) {
    const { account } = req;
    
    const whereOptions = {};

    if (!account["is_admin"]) whereOptions["is_active"] = true;

    const result = await products.findAll({
        where: whereOptions,
    });

    return messages.success("", result);
}

module.exports = getProducts;