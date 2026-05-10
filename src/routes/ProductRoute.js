import express from "express";
import ProductsController from "../controllers/ProductsController.js";
import authenticated from "../middleware/authenticated.js";
import authorize from "../middleware/authorize.js";

import { ROLES } from "../constants/roles.js";

const { ADMIN, MANAGER } = ROLES;

const router = express.Router();

router.get("/", ProductsController.getProducts);

router.use(authenticated);

router.post("/", authorize([ADMIN, MANAGER]), ProductsController.postProduct);
router.patch(
  "/:id",
  authorize([ADMIN, MANAGER]),
  ProductsController.patchProduct,
);
router.delete("/:id", authorize([ADMIN]), ProductsController.deleteProduct);

export default router;
