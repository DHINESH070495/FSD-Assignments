const Product = require("../models/Product");


// Basic Recommendation Logic
const getRecommendedProductsService = async (
  category
) => {

  const products = await Product.find({
    category,
  })
    .limit(5)
    .sort({ createdAt: -1 });

  return products;
};

module.exports = {
  getRecommendedProductsService,
};