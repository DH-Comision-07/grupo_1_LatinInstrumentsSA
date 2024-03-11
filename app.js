const express = require("express");
const app = express();
const indexRouter = require("./src/routes/index.routes.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./src/views"))

app.use(express.static("public"));

const port = 3131;

app.use("/", indexRouter);

app.listen(port, () => {
	console.log(`El servidor corre en el puerto ${port}`);
});
