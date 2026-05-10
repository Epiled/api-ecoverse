import SubcategoryService from "../src/services/SubcategoryService.js";

const subcategoryService = new SubcategoryService();

const subcategories = await subcategoryService.findAll();
const now = new Date().toISOString();

const subcategoriesNormalized = subcategories.map((subcategories) => {
  const hasCreatedAt = subcategories.createAt;
  const hasUpdateAt = subcategories.updateAt;

  let createAt = hasCreatedAt || hasUpdateAt || now;
  let updateAt = hasUpdateAt || hasCreatedAt || now;

  return { ...subcategories, createAt, updateAt };
});

for (const subcategories of subcategoriesNormalized) {
  await subcategoryService.update(subcategories.id, subcategories);
  console.log(`Updated: ${subcategories.id}`);
}

console.log("Migration completed successfully!");
