import express from "express";
import productsRouter from "./products.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.json({
      message: "Bem-vindo à Ecoverse API!",
      endpoints: {
        products: "/api/products",
        status: "online",
      },
    });
  });

  app.use(express.json(), productsRouter);
};

export default routes;
