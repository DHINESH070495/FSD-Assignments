const {
  getRecommendedProductsService,
} = require("../services/recommendationService");


exports.recommendProducts = async (
  req,
  res,
  next
) => {
  try {

    const { category } = req.query;

    const recommendations =
      await getRecommendedProductsService(
        category
      );

    res.status(200).json({
      recommendedProducts: recommendations,
    });

  } catch (error) {
    next(error);
  }
};