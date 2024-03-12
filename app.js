const express = require("express");
const usersRoutes = require("./src/routes/usersRoutes.js");
const indexRoutes = require("./src/routes/indexRoutes.js");
const productRoutes = require("./src/routes/productRoutes.js");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));

app.use("/", usersRoutes);
app.use("/", indexRoutes);
app.use("/", productRoutes);

const port = 3131;
app.listen(port, () => {
	console.log(`El servidor corre en el puerto ${port}`);
});
