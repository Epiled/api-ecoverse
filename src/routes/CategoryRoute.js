import express from "express";
import CategoryController from "../controllers/CategoryController.js";
import authenticated from "../middleware/authenticated.js";
import authorize from "../middleware/authorize.js";

import { ROLES } from "../constants/roles.js";

const { ADMIN, MANAGER } = ROLES;

const router = express.Router();

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategoryById);

router.use(authenticated);

router.post("/", authorize([ADMIN, MANAGER]), CategoryController.postCategory);
router.patch(
  "/:id",
  authorize([ADMIN, MANAGER]),
  CategoryController.patchCategory,
);

router.delete("/:id", authorize([ADMIN]), CategoryController.deleteCategory);

export default router;
