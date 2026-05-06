import CategoryModel from "../models/CategoryModel.js";
import SubcategoryModel from "../models/SubcategoryModel.js";

class CategoryService {
  async findAll(includesSub = false) {
    const categories = await CategoryModel.findAll();

    if (!includesSub) return categories;

    const subcategories = await SubcategoryModel.findAll();

    const result = categories.map((category) => ({
      ...category,
      subcategories: subcategories.filter(
        (sub) => sub.categoryId === category.id,
      ),
    }));

    return result;
  }

  async findById(id) {
    return await CategoryModel.findById(id);
  }

  async findByIdWithSubcategories() {}

  async create(dto) {
    const newCategory = new CategoryModel(dto.slug, dto.label);

    const categoryData = await CategoryModel.create(newCategory);

    return categoryData;
  }

  async update(id, dto) {
    const categoryData = await CategoryModel.update(id, dto);

    if (!categoryData) return null;

    return categoryData;
  }

  async delete(id) {
    return await CategoryModel.delete(id);
  }
}

export default CategoryService;
