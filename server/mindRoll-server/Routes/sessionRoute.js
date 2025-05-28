const express = require('express');
const sessions = require('../Data/sessions.json')
const Router = express.Router()

Router.get('/sessions',(req,res)=>{
   console.log(sessions)
    res.json(sessions)
})

Router.post('/sessions',(req,res)=>{
    const newSession = {
    id: req.body.id,
    date: req.body.date,
    duree:req.body.duree,
    type: req.body.type,
    note: req.body.note,
    soumissionsReussies: req.body.soumissionsReussies}
    sessions.push(newSession)
    res.json(newSession)

})

Router.delete('/session/:id',(req,res)=>{
    const index = sessions.findIndex(session => session.id == req.params.id);


    
    sessions.splice(index)
    res.json('id supprimer')
}) 
module.exports = Router