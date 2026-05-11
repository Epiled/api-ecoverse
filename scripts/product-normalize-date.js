import ProductModel from "../src/models/ProductModel.js";

const products = await ProductModel.findAll();
const now = new Date().toISOString();

const productNormalized = products.map((product) => {
  const hasCreatedAt = product.createAt;
  const hasUpdateAt = product.updateAt;

  let createAt = hasCreatedAt || hasUpdateAt || now;
  let updateAt = hasUpdateAt || hasCreatedAt || now;

  return { ...product, createAt, updateAt };
});

for (const product of productNormalized) {
  await ProductModel.updateProduct(product.id, product);
  console.log(`Updated: ${product.id}`);
}

console.log("Migration completed successfully!");
