const express = require("express");
const { home, carrito, nosotros } = require("../controllers/indexController");

const router = express.Router();

router.get("/", home);
router.get("/carrito", carrito);
router.get("/nosotros", nosotros);

module.exports = router;
