const { messages } = require("../../helpers");
const db = require("../../../models");
const { Op } = require("sequelize");

const products = db["product"];
const categories = db["category"];

const includeOptions = [
    {
        attributes: ["id", "name"],
        model: categories,
        through: {
            attributes: [],
        },
    },
];

function setPagination(page = 1, limit = 10) {
    return {
        offset: (page - 1) * limit,
        limit: parseInt(limit),
    };
}

async function getProducts(account, query) {
    const { name, id_category, order, page, limit } = query;

    const pagination = setPagination(page, limit);
    const whereOptions = {};
    if (!account["is_admin"]) whereOptions["is_active"] = true;
    if (name) whereOptions["name"] = { [Op.like]: `%${name}%` };
    if (id_category) whereOptions["id_category"] = parseInt(id_category);

    const countProduct = await products.count();
    const result = await products.findAll({
        include: includeOptions,
        where: whereOptions,
        order: [["name", order || "ASC"], [categories, "name", "ASC"]],
        ...pagination,
    });

    return messages.success("", {
        pages: Math.ceil(countProduct / (limit || 10)),
        products: result,
    });
}

module.exports = getProducts;
