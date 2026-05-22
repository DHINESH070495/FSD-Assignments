const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");

const {
  authorizeRoles,
} = require("../middleware/roleMiddleware");

router.get("/", getProducts);

router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createProduct
);

router.put(
  "/:id",
  protect,
  authorizeRoles("admin"),
  updateProduct
);

router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  deleteProduct
);

module.exports = router;