const Order = require("../models/Order");


// Create Order
const createOrderService = async (
  orderData,
  userId
) => {

  return await Order.create({
    ...orderData,
    user: userId,
  });
};


// Get All Orders
const getOrdersService = async () => {

  return await Order.find()
    .populate("user", "-password")
    .populate("products.product");
};

module.exports = {
  createOrderService,
  getOrdersService,
};