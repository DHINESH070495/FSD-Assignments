const Product = require("../models/Product");


// Create Product
const createProductService = async (productData) => {
  return await Product.create(productData);
};


// Get Products with Search, Filter, Sort
const getProductsService = async (queryParams) => {

  let query = {};

  // Category Filter
  if (queryParams.category) {
    query.category = queryParams.category;
  }

  // Search by Product Name
  if (queryParams.search) {
    query.name = {
      $regex: queryParams.search,
      $options: "i",
    };
  }

  let products = Product.find(query);

  // Sort by Price
  if (queryParams.sort === "low") {
    products = products.sort({ price: 1 });
  }

  if (queryParams.sort === "high") {
    products = products.sort({ price: -1 });
  }

  return await products;
};


// Update Product
const updateProductService = async (
  productId,
  updateData
) => {

  const product = await Product.findByIdAndUpdate(
    productId,
    updateData,
    { new: true }
  );

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};


// Delete Product
const deleteProductService = async (productId) => {

  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  await product.deleteOne();

  return {
    message: "Product deleted successfully",
  };
};

module.exports = {
  createProductService,
  getProductsService,
  updateProductService,
  deleteProductService,
};