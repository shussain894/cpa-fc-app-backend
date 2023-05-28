import { Router } from "express";
const router = Router();

import FixturesController from "../controllers/Fixtures.js";

router.post("/", FixturesController.Create);
router.get("/", FixturesController.Index);
router.patch("/:id", FixturesController.Update);
router.delete("/:id", FixturesController.Delete);

export default router;
