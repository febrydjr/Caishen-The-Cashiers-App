const router = require("express").Router();
const { cartController } = require("../controllers");
const { auth } = require("../middleware");

// Add item to cart
router.post("/", auth, cartController.addItem);
// Get All item from cart
router.get("/", auth, cartController.getItems);
// Edit cart item
router.patch("/", auth, cartController.editItem);
// Reset cart
router.delete("/", auth, cartController.resetCart);
// Delete item from cart
router.delete("/:id", auth, cartController.deleteItem);

module.exports = router;
