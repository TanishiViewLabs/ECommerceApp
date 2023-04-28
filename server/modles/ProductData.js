const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, require: true, minlegth: 2, maxlegth: 20 },
  price: { type: String, require: true },
  size: { type: String, require: true },
  SKU: { type: String, require: true },
  productDetails: {
    type: String,
    required: true,
  },
  picturePath: {
    type: String,
    default: "",
  },
  reviews: [
    {
      rating: { type: Number },
      reviewDescription: { type: String },
    },
  ],
  quantity: { type: Number, require: true },
  catagory: { type: String, require: true },
  colour: { type: String, require: true },
  audience: { type: String, require: true },
  adminId: { type: String, require: true },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
