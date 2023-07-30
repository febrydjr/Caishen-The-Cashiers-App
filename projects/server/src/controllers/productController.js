const { productService } = require("../services");
const { messages } = require("../helpers");

async function getProducts(req, res) {
    try {
        const result = await productService.getProducts(req);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getProduct(req, res) {
    try {
        const { id } = req.params;
        const result = await productService.getProduct(id);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function addProduct(req, res) {
    try {
        const result = await productService.addProduct(req);
        res.status(result.status).json(messages.response(result));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addProduct,
    getProduct,
    getProducts,
};
