const express = require("express");
const routes = express.Router();
const path = require("path");
const indexController = require("../controllers/indexController");
//const publicPath = path.resolve(__dirname, "./public");

const productRouter = require("./products.routes");
const usersRouter = require("./users.routes");
const usersController = require("../controllers/usersController");

routes.get("/", indexController.goHome);
// routes.get("/login", usersController.goLogin);
// routes.get("/registro", usersController.goRegister);

// estas rutas tendrian que ir dentro de la *.routes correspondientes a users
//rotes.use('/products', productRouter)

// estas rutas tendrian que ir dentro de la *.routes correspondientes a producto
//rotes.use('/users', usersRouter)
routes.get("/carrito", (req, res) => {
	res.sendFile(path.resolve("./src/views/carrito.html"));
});

routes.get("/productDetail", (req, res) => {
	res.sendFile(path.resolve("./src/views/productDetail.html"));
});

module.exports = routes;
