const express = require("express");
const { userById } = require("../controllers/userController");
const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require("../controllers/categoryController");
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../controllers/authController");
const router = express.Router();
router.param("userId", userById);
router.param("categoryId", categoryById);

router.post("/category/create/:userId", requireSignin, isAdmin, isAuth, create);
router.get("/category/:categoryId", read);
router.put(
  "/category/:categoryId/:userId",
  requireSignin,
  isAdmin,
  isAuth,
  update
);
router.delete(
  "/category/:categoryId/:userId",
  requireSignin,
  isAdmin,
  isAuth,
  remove
);
router.get("/categories", list);

module.exports = router;
