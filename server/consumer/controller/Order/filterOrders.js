const Order = require("../../models/Order");
const filterUserOrders = async (req, res) => {
  const { orderID, filterTime } = req.body;
  try {
    const currDate = new Date();
    currDate.setMonth(currDate.getMonth());
    // Search for items with date less than 3 months ago
    const Orderdata = await Order.find({ date: { $lt: currDate } });
    res.send(Orderdata);
  } catch (err) {
    res
      .status(500)
      .send({ status: "fail", message: `An error has occured ${err}` });
  }
};
module.exports = { filterUserOrders };
