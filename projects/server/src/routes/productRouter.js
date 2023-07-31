const router = require("express").Router();
const { auth, multer, isAdmin } = require("../middleware");
const { productController } = require("../controllers");

// Add new product
router.post("/", auth, isAdmin, multer.single("image"), productController.addProduct)
// Delete product
router.delete("/:id", auth, isAdmin, productController.deleteProduct)
// Get All products
router.get("/", auth, productController.getProducts);
// Get an product by id
router.get("/:id", productController.getProduct);

router.post("/category", productController.addCategory);
router.patch("/category", productController.editCategory);
router.delete("/category/:categoryId", productController.deleteCategory);

module.exports = router;
