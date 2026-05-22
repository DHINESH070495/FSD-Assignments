const express = require("express");

const router = express.Router();

const {
  recommendProducts,
} = require("../controllers/analyticsController");

const { protect } = require("../middleware/authMiddleware");


// Product Recommendation Route
router.get(
  "/recommendations",
  protect,
  recommendProducts
);

module.exports = router;