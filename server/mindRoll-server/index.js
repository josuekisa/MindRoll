const express = require('express')
const app = express()
require('dotenv').config();
const config = require('./Config/config');


//Import Routes
const sessions = require('./Routes/sessionRoute.js')

//Definitions des Routes
app.use(express.json())
app.use('/', sessions);


//Démarage serveur
app.listen(config.port, ()=> {
    console.log(`le port sur ecoute est ${config.port}`)
})