const resources = require("../../config/resources");
const Product = require("../../models/ProductData");
const getItem = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const category = req.query.category;
    // const
    const productSearchData = await Product.find({
      name: { $regex: keyword, $options: "i" },
      category: { $regex: "Tshirt", $options: "i" },
    });
    let finalProductdata = [];
    for (let i = 0; i < productSearchData.length; i++) {
      const currObj = {
        SKU: productSearchData[i].SKU,
        name: productSearchData[i].name,
        price: productSearchData[i].price,
        image: productSearchData[i].image,
      };
      finalProductdata.push(currObj);
    }
    res.status(200).send({
      status: resources.status.success,
      data: finalProductdata,
      message: resources.messages.success.fetched,
    });
  } catch (err) {
    res.status(500).send({
      status: resources.status.fail,
      message: resources.messages.error.generic(err),
    });
  }
};
module.exports = { getItem };
