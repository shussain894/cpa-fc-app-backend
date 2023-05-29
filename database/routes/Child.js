import { Router } from "express";
const router = Router();

import ChildController from "../controllers/Child.js";

router.post("/", ChildController.Create);
router.get("/", ChildController.Find);
// router.patch("/:id", UserController.Update);

export default router;
