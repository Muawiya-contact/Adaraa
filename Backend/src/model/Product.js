// Product.js
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, unique: true, index: true },
  description: String,
  images: [{ url: String, publicId: String }],
  categories: [String],
  sizes: [String],
  colors: [String],
  price: { type: Number, required: true },
  salePrice: Number,
  stock: { type: Number, default: 0 },
  ratingAvg: { type: Number, default: 0 },
  ratingCount: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.model("Product", productSchema);