// controllers/productController.js
import { productRepo } from "../repositories/productRepo.sqlite.js";

export async function listProducts(_req, res) {
  const products = productRepo.list();
  res.json({ products });
}
export async function createProduct(req, res) {
  const product = productRepo.create(req.body);
  res.status(201).json({ product });
}