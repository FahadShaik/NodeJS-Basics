import mongoose from "mongoose";

let productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: { type: String, required: true },
  info: {
    type: String,
    required: true,
  },
  qty: { type: Number, required: true },
  created: { type: Date, default: Date.now },
});

let product = mongoose.model("product", productSchema);

export default product;
