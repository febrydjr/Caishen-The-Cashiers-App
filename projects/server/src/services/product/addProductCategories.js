const db = require("../../../models");
const { messages } = require("../../helpers");

const product_categories = db["product_category"];

async function addProductCategories(id_product, id_categories) {
    id_categories = id_categories.split(",");
    return await db.sequelize.transaction(async function (t) {
        for (const id_category of id_categories) {
            await product_categories.create(
                { id_product, id_category: parseInt(id_category) },
                { transaction: t }
            );
        }
        return messages.success("Product category successfully added");
    });
}

module.exports = addProductCategories;
