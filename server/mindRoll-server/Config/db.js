const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/mindroll", {})

    .then(() => console.log("Bien connectée a la db"))
    .catch(() => console.log("j'ai pas reussi à me connecter"));
};
module.exports = connectDB;
