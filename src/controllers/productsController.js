import path from "path";
import { readFile } from "fs/promises";

const cwd = process.cwd();

class ProductsController {
  static async getProducts(req, res) {
    try {
      const productsPath = path.join(cwd, "db/products.json");
      const productsData = await readFile(productsPath, "utf-8");
      const products = JSON.parse(productsData);

      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default ProductsController;
