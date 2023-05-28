import { Router } from "express";
const router = Router();

import UserController from "../controllers/User.js";

router.post("/", UserController.Create);
router.get("/", UserController.Find);
router.patch("/:id", UserController.Update);

export default router;
