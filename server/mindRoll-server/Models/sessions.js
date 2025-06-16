const mongoose = require("mongoose");

const modelSesion = new mongoose.Schema({
  date: { type: String, required: true },
  duree: { type: String, required: true },
  type: { type: String, required: true },
  note: { type: String, required: true },
  soumissionsReussies: { type: String, required: true },
});

const Session = mongoose.model("sessions", modelSesion, "sessions");

module.exports = Session;
