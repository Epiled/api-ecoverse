import SubcategoryModel from "../models/SubcategoryModel.js";
import CategoryModel from "../models/CategoryModel.js";

class SubcategoryService {
  async findAll() {
    return await SubcategoryModel.findAll();
  }

  async findById(id) {
    return await SubcategoryModel.findById(id);
  }

  async create(dto) {
    const parentCategory = await CategoryModel.findById(dto.categoryId);

    if (!parentCategory) {
      throw new Error("Parent category not found");
    }

    const newSubcategory = {
      categoryId: dto.categoryId,
      slug: dto.slug,
      label: dto.label,
    };

    const categoryData = await SubcategoryModel.create(newSubcategory);

    return categoryData;
  }

  async update(id, dto) {
    const categoryData = await SubcategoryModel.update(id, dto);

    if (!categoryData) return null;

    return categoryData;
  }

  async delete(id) {
    return await SubcategoryModel.delete(id);
  }
}

export default SubcategoryService;
