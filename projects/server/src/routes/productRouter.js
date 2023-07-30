const router = require("express").Router();
const {productController} = require("../controllers");

// Get All items
router.get("/", productController.getItems);
// Get an item by id
router.get("/:id", productController.getItem);

module.exports = router;
