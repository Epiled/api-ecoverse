import express from "express";

import ProductsController from "../controllers/ProductsController.js";

const router = express.Router();

router.get("/api/products", ProductsController.getProducts);

export default router;
