const Product = require("../../modles/ProductData");
const randomSKU = () => {
  let min = 10000;
  let max = 99999;
  return (num = Math.floor(Math.random() * (max - min + 1)) + min); // Generate a random number between min and max (inclusive)
};
const insertProduct = async (req, res) => {
  //   console.log(req.body);
  const currAdminId = req.session.passport.user;
  // console.log(req.session.passport.user);
  const {
    name,
    price,
    size,
    productDetails,
    catagory,
    colour,
    audience,
    quantity,
  } = req.body;
  const currFilePath = req.file.path;
  console.log(typeof colour, typeof size);
  const currSKU = randomSKU();
  try {
    const newProduct = new Product({
      name: name,
      price: price,
      size: size,
      SKU: currSKU,
      productDetails: productDetails,
      picturePath: currFilePath,
      quantity: quantity,
      catagory: catagory,
      colour: colour,
      audience: audience,
      adminId: currAdminId,
    });
    newProduct.save();
    res.send({ status: "success", data: newProduct, message: "Data recieved" });
  } catch (err) {
    res.send({ status: "fail", message: `An error has occurred ${err}` });
  }
};
module.exports = { insertProduct };
