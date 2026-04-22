import express from "express";

import ProductsController from "../controllers/ProductsController.js";

const router = express.Router();

router.get("/api/products", ProductsController.getProducts);
router.post("/api/products", ProductsController.postProduct);
router.patch("/api/products/:id", ProductsController.patchProduct);
router.delete("/api/products/:id", ProductsController.deleteProduct);

export default router;
