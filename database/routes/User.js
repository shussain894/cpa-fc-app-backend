const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/User");

router.post("/", UsersController.Create);
router.get("/", UsersController.Find);
router.patch("/:id", UsersController.Update);

module.exports = router;
