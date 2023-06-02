const resources = require("../config/resources");
const Product = require("../models/ProductData");

const getProductByID = async (productID) => {
  const resultData = await Product.findOne({ _id: productID });
  return resultData;
};
const updateProductByID = async (
  productID,
  productDataQuantity,
  inStockItemsQuantity
) => {
  const resultData = await Product.updateOne(
    { _id: productID },
    { quantity: productDataQuantity - inStockItemsQuantity }
  );
  return resultData;
};
const updateProductAddProduct = async (
  productID,
  productDataQuantity,
  inStockItemsQuantity
) => {
  await Product.updateOne(
    { _id: productID },
    { quantity: productDataQuantity + inStockItemsQuantity }
  );
};
const getMultipleProductByIdSize = async (productIDs) => {
  try {
    const productIDValues = productIDs.map((obj) => obj.productID);
    const cartProductIDs = await Product.find({
      _id: { $in: productIDValues },
    });
    const resData = [];
    for (const productID of productIDs) {
      const foundProducts = cartProductIDs.filter(
        (product) => product._id.toString() === productID.productID
      );

      if (foundProducts.length > 0) {
        const productData = {
          _id: productID._id,
          productData: foundProducts[0],
          size: productID.size,
        };
        resData.push(productData);
      }
    }
    return { status: "success", data: resData };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
const getMultipleProductById = async (productIDs) => {
  try {
    const productData = await Product.find({
      _id: { $in: productIDs },
    });
    return {
      status: resources.status.success,
      data: productData,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
const changeProductQty = async (productID, productDataQty, inStockQty) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: productID },
      { quantity: productDataQty - inStockQty }
    );
    return {
      status: resources.status.success,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
const countDocuments = async () => {
  try {
    const documentCnt = await Product.countDocuments();
    return {
      status: resources.status.success,
      data: documentCnt,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
const getProductBySKU = async (SKU) => {
  try {
    const productData = await Product.findOne({ SKU: SKU });
    return {
      status: resources.status.success,
      data: productData,
    };
  } catch (err) {
    return {
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    };
  }
};
const productFilterBySearchObj = async (searchObj) => {
  try {
    const resultData = await Product.find(searchObj);
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
  getProductByID,
  updateProductByID,
  updateProductAddProduct,
  getMultipleProductByIdSize,
  getMultipleProductById,
  changeProductQty,
  countDocuments,
  getProductBySKU,
  productFilterBySearchObj,
};
