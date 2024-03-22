const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/detail", productsController.Detail);
router.get("/edit", productsController.Edit);
router.get("/create", productsController.Create);

module.exports = router;
