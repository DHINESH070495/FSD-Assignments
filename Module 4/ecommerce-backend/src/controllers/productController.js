const {
  createProductService,
  getProductsService,
  updateProductService,
  deleteProductService,
} = require("../services/productService");


exports.createProduct = async (req, res, next) => {
  try {

    const product = await createProductService(
      req.body
    );

    res.status(201).json(product);

  } catch (error) {
    next(error);
  }
};


exports.getProducts = async (req, res, next) => {
  try {

    const products = await getProductsService(
      req.query
    );

    res.status(200).json(products);

  } catch (error) {
    next(error);
  }
};


exports.updateProduct = async (req, res, next) => {
  try {

    const product = await updateProductService(
      req.params.id,
      req.body
    );

    res.status(200).json(product);

  } catch (error) {
    next(error);
  }
};


exports.deleteProduct = async (req, res, next) => {
  try {

    const result = await deleteProductService(
      req.params.id
    );

    res.status(200).json(result);

  } catch (error) {
    next(error);
  }
};