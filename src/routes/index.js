import express from "express";
import productsRouter from "./products.js";

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

  app.use(express.json(), productsRouter);
};

export default routes;
