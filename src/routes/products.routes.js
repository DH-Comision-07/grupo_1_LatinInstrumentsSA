const express = require("express");
const routes = express.Router();
const productConstroller = require("../controllers/productsController");

routes.get("/", (req, res) => res.send("Estas viendo el listado de productos"));
routes.get("/:id", (req, res) => res.send(`Estas viendo el detalle del producto nro ${req.params.id}`));

module.exports = routes;
