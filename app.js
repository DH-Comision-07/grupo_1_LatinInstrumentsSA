const express = require("express");
const app = express();
const indexRouter = require('./src/routers/index.routes.js')

app.use(express.static('public'));

const port = 3131;

app.use('/', indexRouter);

app.listen(port, () => {console.log("El servidor corre en el puerto ${port}")});






