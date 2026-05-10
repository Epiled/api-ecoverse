import express from "express";
import authRouter from "./authRoute.js";
import productsRouter from "./products.js";
import usersRouter from "./UserRoute.js";
import categoryRouter from "./CategoryRoute.js";
import subcategoryRouter from "./SubcategoryRoute.js";

const routes = (app) => {
  app.route("/").get((_, res) => {
    res.json({
      message: "Welcome to Ecoverse API!",
      endpoints: {
        products: "/api/products",
        status: "online",
      },
    });
  });

  app.use(express.json());

  app.use("/api/auth", authRouter);
  app.use("/api/products", productsRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/subcategories", subcategoryRouter);
  app.use("/api/users", usersRouter);
};

export default routes;
