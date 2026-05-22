const express = require("express");

const router = express.Router();

const {
  getUsers,
  getUserProfile,
  updateUserProfile,
  deleteUser,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const {
  authorizeRoles,
} = require("../middleware/roleMiddleware");


// Admin - Get all users
router.get(
  "/",
  protect,
  authorizeRoles("admin"),
  getUsers
);


// Get single user profile
router.get(
  "/:id",
  protect,
  getUserProfile
);


// Update profile
router.put(
  "/:id",
  protect,
  updateUserProfile
);


// Delete user
router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  deleteUser
);

module.exports = router;