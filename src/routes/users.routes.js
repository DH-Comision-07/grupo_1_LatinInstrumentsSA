const express = require('express');
const routes = express.Router();
const usersController = require("../controllers/usersController");

// router.get ('/', (req, res) => res.send("Estas viendo el listado de usuarios"))
// router.get('/:id', (req, res) => res.send('Estas viendo el detalle del usuario nro ${req.params.id}'))

routes.get("/registro", usersController.goRegister);

routes.post("/registro", usersController.goRegister);

routes.get("/login", usersController.goLogin);

routes.post("/login", usersController.goLogin);

module.exports = routes;