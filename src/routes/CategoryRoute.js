import express from "express";
import CategoryController from "../controllers/CategoryController.js";
import authenticated from "../middleware/authenticated.js";

const router = express.Router();

router.get("/", CategoryController.getCategories);
router.get("/:id", CategoryController.getCategoryById);
router.post("/", CategoryController.postCategory);
router.patch("/:id", CategoryController.patchCategory);
router.delete("/:id", CategoryController.deleteCategory);

router.use(authenticated);

export default router;
