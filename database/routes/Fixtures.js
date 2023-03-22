const express = require("express");
const router = express.Router();

const FixturesController = require("../controllers/Fixtures");

router.post("/", FixturesController.Create);
router.get("/", FixturesController.Index);
router.patch("/:id", FixturesController.Update);
router.delete("/:id", FixturesController.Delete);

module.exports = router;
