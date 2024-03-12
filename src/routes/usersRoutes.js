const express = require("express");
const { login, registro } = require("../controllers/usersController");

const router = express.Router();

router.get("/login", login);
router.post("/login", login);
router.get("/registro", registro);
router.post("/registro", registro);

module.exports = router;
