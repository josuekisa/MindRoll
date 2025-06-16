const express = require("express");
const Router = express.Router();
const session = require("../Models/sessions");

//endpoint get

Router.get("/", async (req, res) => {
  try {
    const sessions = await session.find();

    res.json(sessions);
  } catch (err) {
    res.status(500).json("erreuuuuuuuur serveur");
  }
});

module.exports = Router;
