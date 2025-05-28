const express = require('express');
const sessions = require('../Data/sessions.json')
const Router = express.Router()
const { v4: uuidv4 } = require('uuid');


Router.get('/sessions',(req,res)=>{
   console.log(sessions)
    res.json(sessions)
})

Router.post('/sessions',(req,res)=>{
    const newSession = {
    id: uuidv4(),
    date: req.body.date,
    duree:req.body.duree,
    type: req.body.type,
    note: req.body.note,
    soumissionsReussies: req.body.soumissionsReussies}
    sessions.push(newSession)
    res.json(newSession)

})

Router.delete('/sessions/:id',(req,res)=>{
    const index = sessions.findIndex(session => session.id == req.params.id);
    
    if(index === -1){
        return res.status(404).json({eror:"session non trouvée"});
       
    }

    
    sessions.splice(index,1)
    res.json('id supprimer')
}) 
module.exports = Router