
import express from "express";
import { protect, authorize } from "../../middlewares/authMiddleware";
import { productControllers } from "./productController";

const router = express.Router();

router.post("/", protect, authorize("admin", "manager"), productControllers.createProduct);
router.get("/", productControllers.getProducts);
router.get("/:id", productControllers.getProductById);
router.put("/:id", protect, authorize("admin", "manager"), productControllers.updateProduct);
router.delete("/:id", protect, authorize("admin"), productControllers.deleteProduct);

export const  productRouter= router;
