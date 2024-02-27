const express = require("express");
const app = express();

const path = require("path");
const publicPath = path.resolve(__dirname, "./public"); 
app.use(express.static(publicPath));  //Metodo use se ejecuta sobre la variable app


app.listen(3131, () => {
    console.log("El servidor corre en el puerto 3131")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"))
});

app.get("/registro", (req, res) => {
    res.sendFile(path.resolve("./views/registro.html"))
});

app.get("/carrito", (req, res) => {
    res.sendFile(path.resolve("./views/carrito.html"))
});

app.post("/registro", (req, res) => {
    res.send("Felicidades te registraste con exito")
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve("./views/productDetail.html"))
});



