import { v4 as uuidv4 } from "uuid";
import path from "path";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const categoriesPath = path.resolve(__dirname, "../db/category.json");

class CategoryModel {
  constructor(slug, label) {
    this.id = uuidv4();
    this.slug = slug;
    this.label = label;
    this.createAt = new Date();
    this.updateAt = new Date();
  }

  static async findAll() {
    const data = await readFile(categoriesPath, "utf-8");
    return JSON.parse(data);
  }

  static async findById(id) {
    const data = await this.findAll();
    return data.find((category) => category.id === id);
  }

  static async create(categoryData) {
    const data = await this.findAll();
    data.push(categoryData);
    await writeFile(categoriesPath, JSON.stringify(data, null, 2));
    return categoryData;
  }

  static async update(id, categoryData) {
    const data = await this.findAll();
    const dataIndex = data.findIndex((category) => category.id === id);

    if (data === -1) return null;

    const updatedCategory = {
      ...data[dataIndex],
      ...categoryData,
      id,
      updateAt: new Date(),
    };

    data[dataIndex] = updatedCategory;

    await writeFile(categoriesPath, JSON.stringify(data, null, 2));
    return updatedCategory;
  }

  static async delete(id) {
    const data = await this.findAll();
    const dataIndex = data.findIndex((category) => category.id === id);

    if (dataIndex === -1) return null;

    data.splice(dataIndex, 1);

    await writeFile(categoriesPath, JSON.stringify(data, null, 2));
    return true;
  }
}

export default CategoryModel;
