const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

const {
  authorizeRoles,
} = require("../middleware/roleMiddleware");


// Create Order (User/Admin)
router.post(
  "/",
  protect,
  authorizeRoles("user", "admin"),
  createOrder
);


// Get All Orders (Admin Only)
router.get(
  "/",
  protect,
  authorizeRoles("admin"),
  getOrders
);

module.exports = router;