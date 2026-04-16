import ProductModel from "../models/ProductModel.js";

class ProductsController {
  static async getProducts(req, res) {
    try {
      const { category, subcategory } = req.query;
      const products = await ProductModel.findByFilters(category, subcategory);

      if (products.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No products found for the given filters",
        });
      }

      // Response format (Skinny Controller)
      res.status(200).json({
        success: true,
        total: products.length,
        data: products,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal server error while fetching products.",
      });
    }
  }
}

export default ProductsController;
