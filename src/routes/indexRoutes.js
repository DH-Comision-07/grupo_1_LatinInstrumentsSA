const express = require("express");
const indexController= require("../controllers/indexController");

const router = express.Router();

router.get("/", indexController.home);
router.get("/carrito", indexController.carrito);
router.get("/nosotros", indexController.nosotros);

module.exports = router;
