const resources = require("../config/resources");
const Order = require("../models/Order");

const addOrderByOrderObject = async (orderObject) => {
  try {
    const orderData = await Order.create(orderObject);
    return {
      status: resources.status.success,
      data: orderData,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error(err),
    };
  }
};
const deleteOrderByOrderID = async (orderID) => {
  try {
    const resultData = await Order.findByIdAndDelete(orderID);
    return {
      status: resources.status.success,
      data: resultData,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
const updateOrderByOrderID = async (orderID, updateObj) => {
  try {
    const resultData = await Order.findOneAndUpdate(
      { _id: orderID },
      updateObj
    );
    return {
      status: resources.status.success,
      data: resultData,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
const findOrderByIDandObject = async (searchObj) => {
  try {
    const resultData = await Order.find(searchObj);
    return {
      status: resources.status.success,
      data: resultData,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
const findOrderByID = async (orderID) => {
  try {
    const resultData = await Order.findOne({ _id: orderID });
    return {
      status: resources.status.success,
      data: resultData,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
module.exports = {
  addOrderByOrderObject,
  deleteOrderByOrderID,
  updateOrderByOrderID,
  findOrderByIDandObject,
  findOrderByID,
};
