const router = require("express").Router();
const { profileController } = require("../controllers");
const { auth, multer } = require("../middleware");

router.get("/", auth, profileController.getProfile);
router.post(
  "/avatar",
  auth,
  multer.single("avatar"),
  profileController.updateAvatar
);
router.get("/cashier", profileController.getAllProfiles);
router.patch("/remove-user", profileController.deleteUser);

module.exports = router;
