import express from "express";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();

router.post("/api/auth/login", AuthController.login);

export default router;
