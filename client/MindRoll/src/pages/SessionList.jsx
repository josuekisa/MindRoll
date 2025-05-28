import React, { useEffect,useState } from 'react'
import axios from 'axios'


const SessionList = () => {
 const [list,setList]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/sessions')
        .then(function(res){
            console.log(res.data)
            setList(res.data)
        })
        
        .catch(function(error){
            console.log("j'arrive pas avoir acces aux seances.")
        })
   
    },[])
  
    return (
    <div>
        <ul className=' flex flex-col'>
          {list.map((list)=> (
           <li key={list.id}> 
           📅 {list.date} —
            🥋 {list.type} —
             🧠 note : {list.note}
           </li>
          ))}
       
        </ul>
   
   </div>
  )
}

export default SessionList