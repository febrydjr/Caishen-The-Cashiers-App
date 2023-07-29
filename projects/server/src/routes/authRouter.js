const router = require("express");
const { authController } = require("../controllers");

router.post("/forgot", authController.forgotPass);
