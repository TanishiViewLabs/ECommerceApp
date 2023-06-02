const Order = require("../../models/Order");
const resources = require("../../config/resources");
const ProductDataServices = require("../../services/ProductDataServices");
const getUserOrders = async (req, res) => {
  try {
    const consumerID = req.session.passport.user;
    const userOrders = await Order.find({ consumerID: consumerID });
    let allUserOrder = [];
    for (let i = 0; i < userOrders.length; i++) {
      const productData = await ProductDataServices.getProductByID(
        userOrders[i].productID
      );
      let currObj = {};
      currObj.orderID = userOrders[i]._id;
      currObj.name = productData.name;
      currObj.orderDate = userOrders[i].orderDate;
      currObj.image = productData.image;
      currObj.orderStatus = userOrders[i].orderStatus;
      allUserOrder.push(currObj);
    }
    res.status(200).send({
      status: resources.status.success,
      message: `Here is all the orders by id ${consumerID}`,
      data: allUserOrder,
    });
  } catch (err) {
    res.status(500).send({
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    });
  }
};
module.exports = { getUserOrders };
