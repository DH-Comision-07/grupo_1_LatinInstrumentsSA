const express = require("express");
const usersController= require("../controllers/usersController");

const router = express.Router();

router.get("/login", usersController.login);
router.post("/login", usersController.login);
router.get("/registro", usersController.registro);
router.post("/registro", usersController.registro);

module.exports = router;
