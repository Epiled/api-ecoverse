import SubcategoryService from "../services/SubcategoryService.js";

const subcategoryService = new SubcategoryService();

class SubcategoryController {
  static async getSubcategories(_, res) {
    try {
      const subcategories = await subcategoryService.findAll();

      res.status(200).json({
        success: true,
        total: subcategories.length,
        data: subcategories,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getSubcategoryById(req, res) {
    const { id } = req.params;

    try {
      const subcategory = await subcategoryService.findById(id);

      if (!subcategory) {
        return res.status(404).json({
          success: false,
          message: "Subcategory not found!",
        });
      }

      res.status(200).json({
        success: true,
        data: subcategory,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async postSubcategory(req, res) {
    const { categoryId, slug, label } = req.body;

    try {
      const subcategory = await subcategoryService.create({
        categoryId,
        slug,
        label,
      });

      if (!subcategory) {
        return res.status(404).json({
          success: false,
          message: "Subcategory not found!",
        });
      }

      res.status(201).json({
        success: true,
        data: subcategory,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async patchSubcategory(req, res) {
    const { id } = req.params;

    try {
      const subcategory = await subcategoryService.update(id, req.body);

      if (!subcategory) {
        return res.status(404).json({
          success: false,
          message: "Subcategory not found!",
        });
      }

      res.status(200).json({
        success: true,
        data: subcategory,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteSubcategory(req, res) {
    const { id } = req.params;

    try {
      const deleted = await subcategoryService.delete(id);

      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Category not found!",
        });
      }

      res.status(204).send();
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Internal server error while fetching subcategories!",
      });
    }
  }
}

export default SubcategoryController;
