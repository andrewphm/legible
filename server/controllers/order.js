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
      : await Order.find().sort({ _id: -1 });

    res.status(200).json(orders);
  } catch (error) {}
};

// GET Order Stats

const getMonthlyIncome = async (req, res) => {
  // Returning last two months income
  const twoMonthsAgo = new Date(new Date().setMonth(new Date().getMonth() - 2));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: twoMonthsAgo } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getOrders, createOrder, getMonthlyIncome };
