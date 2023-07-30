const { productService } = require("../services");
const { messages } = require("../helpers");

async function getItems(req, res) {
    try {
        const { account } = req;
        const result = await productService.getItems(account);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getItem(req, res) {
    try {
        const { id } = req.params;
        const result = await productService.getItem(id);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getItem,
    getItems,
};
