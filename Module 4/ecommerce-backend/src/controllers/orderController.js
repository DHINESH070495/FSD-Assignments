const {
  createOrderService,
  getOrdersService,
} = require("../services/orderService");


exports.createOrder = async (
  req,
  res,
  next
) => {
  try {

    const order = await createOrderService(
      req.body,
      req.user.id
    );

    res.status(201).json(order);

  } catch (error) {
    next(error);
  }
};


exports.getOrders = async (
  req,
  res,
  next
) => {
  try {

    const orders = await getOrdersService();

    res.status(200).json(orders);

  } catch (error) {
    next(error);
  }
};