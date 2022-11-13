const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
});

const Product = new mongoose.model("product", productSchema);
module.exports = Product;
