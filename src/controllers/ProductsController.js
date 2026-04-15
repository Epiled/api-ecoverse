import path from "path";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ProductsController {
  static async getProducts(req, res) {
    try {
      const productsPath = path.resolve(__dirname, "../db/products.json");
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
