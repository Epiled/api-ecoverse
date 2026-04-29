import express from "express";
import authRouter from "./authRoute.js";
import productsRouter from "./products.js";
import usersRouter from "./UserRoute.js";

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

  app.use(express.json(), authRouter);
  app.use(express.json(), productsRouter);
  app.use(express.json(), usersRouter);
};

export default routes;
