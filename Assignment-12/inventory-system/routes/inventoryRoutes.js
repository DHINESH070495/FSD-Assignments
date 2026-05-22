const express = require("express");
const router = express.Router();

const {
  addItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} = require("../controllers/inventoryController");

const validateItem = require("../middleware/validation");

router.post("/", validateItem, addItem);
router.get("/", getItems);
router.get("/:id", getItem);
router.put("/:id", validateItem, updateItem);
router.delete("/:id", deleteItem);

module.exports = router;