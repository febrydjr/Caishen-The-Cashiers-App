const { productService } = require("../services");
const messages = require("../helpers/messages");

async function addCategory(req, res) {
  try {
    const { name } = req.body;
    const newCategory = await productService.addCategory(name);
    return res.status(201).json(messages.response(newCategory));
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function editCategory(req, res) {
  try {
    const { categoryId, name } = req.body;
    const updatedCategory = await productService.editCategory(categoryId, name);
    return res.status(200).json(messages.response(updatedCategory));
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

async function deleteCategory(req, res) {
  try {
    const { categoryId } = req.params;
    await productService.deleteCategory(categoryId);
    return res
      .status(200)
      .json(messages.success("Category deleted successfully"));
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  addCategory,
  editCategory,
  deleteCategory,
};
