const router = require("express").Router();
const { productController } = require("../controllers");
const { auth } = require("../middleware");

// router.use(auth);

router.post("/category", productController.addCategory);
router.patch("/category", productController.editCategory);
router.delete("/category/:categoryId", productController.deleteCategory);

module.exports = router;
