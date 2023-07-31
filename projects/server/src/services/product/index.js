const getProduct = require("./getProduct");
const getProducts = require("./getProducts");
const addProduct = require("./addProduct");
const deleteProduct = require("./deleteProduct");

const addCategory = require("./addCategory");
const editCategory = require("./editCategory");
const deleteCategory = require("./deleteCategory");

const addProductCategories = require("./addProductCategories");
const deleteProductCategory = require("./deleteProductCategory");

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    deleteProduct,
    addCategory,
    editCategory,
    deleteCategory,
    addProductCategories,
    deleteProductCategory,
};
