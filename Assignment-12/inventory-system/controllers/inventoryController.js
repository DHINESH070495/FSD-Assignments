const inventory = require("../model/inventoryData");

// CREATE
exports.addItem = (req, res, next) => {
  try {
    const { name, category, quantity } = req.body;

    const newItem = {
      id: Date.now().toString(),
      name,
      category,
      quantity
    };

    inventory.push(newItem);

    res.status(201).json({
      success: true,
      data: newItem
    });
  } catch (err) {
    next(err);
  }
};

// GET ALL + FILTER + SEARCH
exports.getItems = (req, res, next) => {
  try {
    let result = [...inventory];

    const { category, minQty, search } = req.query;

    if (category) {
      result = result.filter(item => item.category === category);
    }

    if (minQty) {
      result = result.filter(item => item.quantity >= Number(minQty));
    }

    if (search) {
      result = result.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    res.json({
      success: true,
      count: result.length,
      data: result
    });
  } catch (err) {
    next(err);
  }
};

// GET SINGLE
exports.getItem = (req, res, next) => {
  try {
    const item = inventory.find(i => i.id === req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// UPDATE
exports.updateItem = (req, res, next) => {
  try {
    const item = inventory.find(i => i.id === req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    const { name, category, quantity } = req.body;

    if (name) item.name = name;
    if (category) item.category = category;
    if (quantity !== undefined) item.quantity = quantity;

    res.json({
      success: true,
      data: item
    });
  } catch (err) {
    next(err);
  }
};

// DELETE
exports.deleteItem = (req, res, next) => {
  try {
    const index = inventory.findIndex(i => i.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ message: "Item not found" });
    }

    inventory.splice(index, 1);

    res.json({
      success: true,
      message: "Item deleted"
    });
  } catch (err) {
    next(err);
  }
};