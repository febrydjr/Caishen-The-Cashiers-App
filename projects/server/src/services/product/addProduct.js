const db = require("../../../models");
const { messages } = require("../../helpers");

const products = db["product"];
const product_categories = db["product_category"];

async function addProduct(req) {
    const { path } = req.file;
    const { name, description, price, stock } = req.body;
    return db.sequelize.transaction(async function (t) {
        await products.create(
            {
                name,
                description,
                price,
                stock: stock ? stock : 0,
                image: path,
            },
            { transaction: t }
        );
        return messages.success("Product successfully added");
    });
}

module.exports = addProduct;
