import CategoryService from "../src/services/CategoryService.js";

const categoryService = new CategoryService();

const categories = await categoryService.findAll();
const now = new Date().toISOString();

const categoriesNormalized = categories.map((category) => {
  const hasCreatedAt = category.createAt;
  const hasUpdateAt = category.updateAt;

  let createAt = hasCreatedAt || hasUpdateAt || now;
  let updateAt = hasUpdateAt || hasCreatedAt || now;

  return { ...category, createAt, updateAt };
});

for (const category of categoriesNormalized) {
  await categoryService.update(category.id, category);
  console.log(`Updated: ${category.id}`);
}

console.log("Migration completed successfully!");
