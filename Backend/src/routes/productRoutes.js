// routes/productRoutes.js
import { Router } from "express";
import { listProducts, createProduct } from "../controllers/productController.js";
import { auth } from "../middleware/auth.js";
import { admin } from "../middleware/admin.js";
const router = Router();
router.get("/", listProducts);
router.post("/", auth, admin, createProduct);
export default router;