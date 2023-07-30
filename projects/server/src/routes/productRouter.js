const router = require("express").Router();
const { auth, multer } = require("../middleware");
const { productController } = require("../controllers");

// Add new product
router.post("/", auth, multer.single("image"), productController.addProduct)
// Get All products
router.get("/", auth, productController.getProducts);
// Get an product by id
router.get("/:id", productController.getProduct);

router.post("/category", productController.addCategory);
router.patch("/category", productController.editCategory);
router.delete("/category/:categoryId", productController.deleteCategory);

module.exports = router;
