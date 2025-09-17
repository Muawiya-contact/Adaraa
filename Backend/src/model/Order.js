// Order.js
import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: Number,
    priceAtPurchase: Number,
  }],
  subtotal: Number,
  shipping: Number,
  tax: Number,
  total: Number,
  paymentIntentId: String,
  status: { type: String, enum: ["pending","paid","shipped","delivered","cancelled"], default: "pending" },
  shippingAddress: Object,
}, { timestamps: true });
export default mongoose.model("Order", orderSchema);