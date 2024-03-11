const express = require("express");
const routes = express.Router();
const path = require("path");
//const publicPath = path.resolve(__dirname, "./public");

const productRouter = require("./products.routes");
const usersRouter = require("./users.routes");

routes.get("/", (req, res) => {
	res.sendFile(path.resolve("./src/views/home.html"));
});

// estas rutas tendrian que ir dentro de la *.routes correspondientes a users
//rotes.use('/products', productRouter)
routes.get("/registro", (req, res) => {
	res.sendFile(path.resolve("./src/views/registro.html"));
});

routes.post("/registro", (req, res) => {
	res.sendFile(path.resolve("./src/views/home.html"));
});

routes.get("/login", (req, res) => {
	res.sendFile(path.resolve("./src/views/login.html"));
});

routes.post("/login", (req, res) => {
	res.sendFile(path.resolve("./src/views/home.html"));
});

// estas rutas tendrian que ir dentro de la *.routes correspondientes a producto
//rotes.use('/users', usersRouter)
routes.get("/carrito", (req, res) => {
	res.sendFile(path.resolve("./src/views/carrito.html"));
});

routes.get("/productDetail", (req, res) => {
	res.sendFile(path.resolve("./src/views/productDetail.html"));
});

routes.get("/nosotros", (req, res) => {
	res.sendFile(path.resolve("./src/views/nosotros.html"));
});

module.exports = routes;
