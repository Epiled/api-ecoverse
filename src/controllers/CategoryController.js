import CategoryService from "../services/CategoryService.js";

const categoryService = new CategoryService();

class CategoryController {
  static async getCategories(req, res) {
    try {
      const includeSub = req.query.include === "subcategories";

      const categories = await categoryService.findAll(includeSub);

      res.status(200).json({
        success: true,
        total: categories.length,
        data: categories,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getCategoryById(req, res) {
    const { id } = req.params;

    try {
      const category = await categoryService.findById(id);

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found!",
        });
      }

      res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async getCategoriesWithSubcategories(_, res) {
    try {
      const categoriesWithSubcategories =
        await await categoryService.findAllWithSubcategories();

      res.status(200).json({
        success: true,
        total: data.length,
        data: categoriesWithSubcategories,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async postCategory(req, res) {
    const { slug, label } = req.body;

    try {
      const category = await categoryService.create({ slug, label });

      res.status(201).json({
        success: true,
        data: category,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async patchCategory(req, res) {
    const { id } = req.params;

    try {
      const category = await categoryService.update(id, req.body);

      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found!",
        });
      }

      res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  static async deleteCategory(req, res) {
    const { id } = req.params;

    try {
      const deleted = await categoryService.delete(id);

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
        message: "Internal server error while fetching categories!",
      });
    }
  }
}

export default CategoryController;
