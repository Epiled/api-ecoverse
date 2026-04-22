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

  static async postProduct(req, res) {
    try {
      const product = await ProductModel.insertProduct(req.body);

      res.status(201).json({
        success: true,
        data: product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal server error while fetching products.",
      });
    }
  }

  static async patchProduct(req, res) {
    const id = req.params.id;

    try {
      const product = await ProductModel.updateProduct(id, req.body);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found.",
        });
      }

      res.status(200).json({
        success: true,
        data: product,
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
