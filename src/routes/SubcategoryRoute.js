import express from "express";
import SubcategoryController from "../controllers/SubcategoryController.js";

const router = express.Router();

router.get("/", SubcategoryController.getSubcategories);
router.get("/:id", SubcategoryController.getSubcategoryById);
router.post("/", SubcategoryController.postSubcategory);
router.patch("/:id", SubcategoryController.patchSubcategory);
router.delete("/:id", SubcategoryController.deleteSubcategory);

export default router;
