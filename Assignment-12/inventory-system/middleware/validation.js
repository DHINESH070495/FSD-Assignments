module.exports = (req, res, next) => {
  const { name, category, quantity } = req.body;

  if (!name || !category || quantity === undefined) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  next();
};