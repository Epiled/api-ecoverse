import express from "express";

import UserController from "../controllers/UserController.js";

import authenticated from "../middleware/authenticated.js";

const router = express.Router();

router.use(authenticated);

router.get("/api/users", UserController.getUsers);
router.get("/api/users/:id", UserController.getUserById);
router.post("/api/users", UserController.postUser);
router.patch("/api/users/:id", UserController.patchUser);
router.delete("/api/users/:id", UserController.deleteUser);

export default router;
