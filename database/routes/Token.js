import { Router } from "express";
const router = Router();

import TokenController from "../controllers/Token.js";

router.post("/", TokenController.Create);

export default router;
