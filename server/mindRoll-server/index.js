const express = require("express");
const app = express();
require("dotenv").config();
const config = require("./Config/config");
const cors = require("cors");
const connectDB = require("./Config/db.js");

app.use(cors()); // bonne pratique si t’appelles depuis frontend React
app.use(express.json()); // ⬅️ AJOUTE ÇA !
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`→ ${req.method} ${req.url}`);
  next();
});

//import db
connectDB();

//Import Routes
const sessionRoutes = require("./Routes/sessionRoute.js");

//Définitions des Routes
app.use("/sessions", sessionRoutes);

app.get("/", (req, res) => {
  res.send("MindRoll backend dispo");
});

//Démarrage serveur
app.listen(config.port, "0.0.0.0", () => {
  console.log(`le port sur ecoute est ${config.port}`);
});
