import express from "express";
import UserController from "../controllers/UserController.js";
import authenticated from "../middleware/authenticated.js";
import authorize from "../middleware/authorize.js";
import isOwnerOrAdmin from "../middleware/owner.js";

import { ROLES } from "../constants/roles.js";

const { ADMIN } = ROLES;

const router = express.Router();

router.post("/", UserController.postUser);

router.use(authenticated);

router.get("/", authorize([ADMIN]), UserController.getUsers);

router.get("/:id", isOwnerOrAdmin, UserController.getUserById);
router.patch("/:id", isOwnerOrAdmin, UserController.patchUser);

router.delete("/:id", authorize([ADMIN]), UserController.deleteUser);

export default router;
