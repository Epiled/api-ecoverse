import express from "express";

import ProductsController from "../controllers/ProductsController.js";

const router = express.Router();

router.get("/api/products", ProductsController.getProducts);
router.post("/api/products", ProductsController.postProduct);

export default router;
