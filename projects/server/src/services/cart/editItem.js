const db = require("../../../models");
const { messages } = require("../../helpers");
const deleteItem = require("./deleteItem");

const cart_items = db["cart_item"];

async function editItem(id, qty) {
    const isExist = await cart_items.findOne({where: {id}});
    if(!isExist) return messages.error(404, "Item not found");

    return await db.sequelize.transaction(async function (t) {
        if(qty === 0) await deleteItem(id);
        else await cart_items.update({ qty }, { where: { id }, transaction: t });
        return messages.success("Product successfully updated");
    });
}

module.exports = editItem;
