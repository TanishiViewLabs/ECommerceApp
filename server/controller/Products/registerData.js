const Product = require("../../modles/ProductData");
const randomSKU = () => {
  let min = 10000;
  let max = 99999;
  return (num = Math.floor(Math.random() * (max - min + 1)) + min); // Generate a random number between min and max (inclusive)
};
const insertProduct = async (req, res) => {
  console.log(req.body);
  const {
    currName,
    currPrice,
    currSize,
    currProductDetails,
    currCatagory,
    currColour,
    currAudience,
    currSellerName,
    currQuantity,
  } = req.body;
  const currFilePath = req.file.path;
  const currSKU = randomSKU();
  const newProduct = new Product({
    name: currName,
    price: currPrice,
    size: currSize,
    SKU: currSKU,
    productDetails: currProductDetails,
    picturePath: currFilePath,
    quantity: currQuantity,
    catagory: currCatagory,
    colour: currColour,
    audience: currAudience,
    sellerName: currSellerName,
  });
  newProduct.save();
  res.send({ status: "success", data: newProduct, message: "Data recieved" });
};
module.exports = { insertProduct };
