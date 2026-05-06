import { v4 as uuidv4 } from "uuid";
import path from "path";
import { readFile, writeFile } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const subcategoryPath = path.resolve(__dirname, "../db/subcategory.json");

class SubcategoryModel {
  constructor(categoryId, slug, label) {
    this.id = uuidv4();
    this.categoryId = categoryId;
    this.slug = slug;
    this.label = label;
    this.createAt = new Date();
    this.updateAt = new Date();
  }

  static async findAll() {
    const data = await readFile(subcategoryPath, "utf-8");
    return JSON.parse(data);
  }

  static async findById(id) {
    const data = await this.findAll();
    return data.find((subcategory) => subcategory.id === id);
  }

  static async create(subcategoryData) {
    const data = await this.findAll();
    data.push(subcategoryData);
    await writeFile(subcategoryPath, JSON.stringify(data, null, 2));
    return subcategoryData;
  }

  static async update(id, subcategoryData) {
    const data = await this.findAll();
    const dataIndex = data.findIndex((subcategory) => subcategory.id === id);

    if (data === -1) return null;

    const updateData = {
      ...data[dataIndex],
      ...subcategoryData,
    };

    data[dataIndex] = updateData;

    await writeFile(subcategoryPath, JSON.stringify(data, null, 2));
    return updateData;
  }

  static async delete(id) {
    const data = await this.findAll();
    const dataIndex = data.findIndex((subcategory) => subcategory.id === id);

    if (dataIndex === -1) return;

    data.splice(dataIndex, 1);

    await writeFile(subcategoryPath, JSON.stringify(data, null, 2));
    return true;
  }
}

export default SubcategoryModel;
