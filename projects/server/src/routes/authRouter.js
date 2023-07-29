const router = require("express").Router();
const { authController } = require("../controllers");
const { authMiddleware } = require("../middleware");

router.post(
    "/login",
    authMiddleware.loginValidator,
    authMiddleware.vResult,
    authController.login
);
router.post(
    "/register",
    authMiddleware.registerValidator,
    authMiddleware.vResult,
    authController.register
);
router.post("/forgot", authController.forgotPassword);
router.patch("/reset", authController.resetPassword)

module.exports = router;
