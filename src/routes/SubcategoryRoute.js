import express from "express";
import SubcategoryController from "../controllers/SubcategoryController.js";
import authenticated from "../middleware/authenticated.js";
import authorize from "../middleware/authorize.js";

import { ROLES } from "../constants/roles.js";

const { ADMIN, MANAGER } = ROLES;

const router = express.Router();

router.get("/", SubcategoryController.getSubcategories);
router.get("/:id", SubcategoryController.getSubcategoryById);

router.use(authenticated);

router.post(
  "/",
  authorize([ADMIN, MANAGER]),
  SubcategoryController.postSubcategory,
);
router.patch(
  "/:id",
  authorize([ADMIN, MANAGER]),
  SubcategoryController.patchSubcategory,
);
router.delete(
  "/:id",
  authorize([ADMIN]),
  SubcategoryController.deleteSubcategory,
);

export default router;
