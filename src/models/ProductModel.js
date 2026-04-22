import path from "path";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsPath = path.resolve(__dirname, "../db/products.json");

class ProductModel {
  constructor(
    id,
    productName,
    descriptionShort,
    photo,
    price,
    category,
    subcategory,
  ) {
    this.id = id;
    this.productName = productName;
    this.descriptionShort = descriptionShort;
    this.photo = photo;
    this.price = price;
    this.category = category;
    this.subcategory = subcategory;
  }

  static async findAll() {
    const data = await readFile(productsPath, "utf-8");
    const products = JSON.parse(data);

    return products;
  }

  static async findByFilters(category, subcategory) {
    const allProducts = await this.findAll();

    return allProducts.filter((product) => {
      const matchCategory = category
        ? product.category === category.toLowerCase()
        : true;
      const matchSubcategory = subcategory
        ? product.subcategory === subcategory.toLowerCase()
        : true;
      return matchCategory && matchSubcategory;
    });
  }

  static async insertProduct(product) {
    const allProducts = await this.findAll();

    const newProduct = {
      ...product,
      id: uuidv4(),
    };

    allProducts.push(newProduct);

    await writeFile(
      productsPath,
      JSON.stringify(allProducts, null, 2),
      "utf-8",
    );

    return newProduct;
  }

  static async updateProduct(id, updateData) {
    const allProducts = await this.findAll();
    const index = allProducts.findIndex((p) => p.id === id);

    if (index === -1) return null;

    allProducts[index] = { ...allProducts[index], ...updateData, id };

    await writeFile(
      productsPath,
      JSON.stringify(allProducts, null, 2),
      "utf-8",
    );

    return allProducts[index];
  }
}

export default ProductModel;
