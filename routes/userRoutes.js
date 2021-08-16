const express = require("express");
const { userById, read, update } = require("../controllers/userController");
const { requireSignin, isAuth } = require("../controllers/authController");
const router = express.Router();

router.param("userId", userById);

router.get("/user/:userId", read);
router.put(
  "/user/:userId",
  requireSignin,
  isAuth,
  update
);

module.exports = router;
