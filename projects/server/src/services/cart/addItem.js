const { Op } = require("sequelize");
const db = require("../../../models");
const { messages } = require("../../helpers");
const editItem = require("./editItem");

const carts = db["cart"];
const cart_items = db["cart_item"];

async function createCart(id_user) {
    return await db.sequelize.transaction(async function (t) {
        return await carts.create({ id_user }, { transaction: t });
    });
}

async function getCart(id_user) {
    const cart = await carts.findOne({ where: { id_user } });
    return cart ? cart : await createCart(id_user);
}

async function addItem(id_user, id_product) {
    const cart = await getCart(id_user);
    const isExist = await cart_items.findOne({
        where: { [Op.and]: [{ id_cart: cart["id"] }, { id_product }] },
    });

    return await db.sequelize.transaction(async function (t) {
        if (isExist) {
            return await editItem(isExist["id"], id_product, isExist["qty"] + 1);
        } else await cart_items.create({ id_cart: cart["id"], id_product,  }, { transaction: t });
        return messages.success("Item added successfully");
    });
}

module.exports = addItem;
