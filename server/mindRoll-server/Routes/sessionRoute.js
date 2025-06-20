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

//endpoit post
Router.post("/", async (req, res) => {
  try {
    const newSessions = new session({
      date: req.body.date,
      duree: req.body.duree,
      type: req.body.type,
      note: req.body.note,
      soumissionsReussies: req.body.soumissionsReussies,
    });

    await newSessions.save();
    res.json(newSessions);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "erreur 500" });
  }
});

//endpoit delete

Router.delete("/sessions/:id", async (req, res) => {
  const sessionDelete = await session.findByIdAndDelete(req.params.id);
  try {
    sessionDelete
      ? res.send(sessionDelete)
      : res.status(404).json("error 404: je ne trouve pas id");
  } catch (err) {
    res.status(500).json("error serveur");
  }
  res.send(sessionDelete);
});

module.exports = Router;
