const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require("./router/userRoutes");
const competitorRoutes = require("./router/competitorRoutes");
const mongoose = require('mongoose');


app.use(bodyParser.json())
// Activacion de Cors para que cualquier cliente acceda a la API
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/getawinnerDB');
}
main().catch(err => console.log(err));

app.use("/users/", userRoutes);
app.use("/competitors/", competitorRoutes);

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
