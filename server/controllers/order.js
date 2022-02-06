const Order = require('../models/Order');

// Create Order

const createOrder = async (req, res) => {
  try {
    let newOrder = new Order(req.body);
    let savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {}
};

// GET Orders
const getOrders = async (req, res) => {
  try {
    let query = req.query.new;
    let orders = query
      ? await Order.find().sort({ _id: -1 }).limit(5)
      : await Order.find();

    res.status(200).json(orders);
  } catch (error) {}
};

module.exports = { getOrders, createOrder };
