const express = require('express')
const app = express()
require('dotenv').config();
const config = require('./Config/config');


app.get('/',(req,res)=>{
res.send( 'hello world')
})

app.listen(config.port, ()=> {
    console.log(`le port sur ecoute est ${config.port}`)
})