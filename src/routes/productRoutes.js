const express = require("express");
const { productDetail, productEditCreate } = require("../controllers/productController");

const router = express.Router();

router.get("/productDetail", productDetail);
router.get("/productEditCreate", productEditCreate);

module.exports = router;
