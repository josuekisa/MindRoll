import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Historique = () => {
 
const [storage,setStorage]= useState([]);
const [date,setDate]= useState([]);
   
useEffect(()=>{
axios.get('http://localhost:3000/sessions')
 .then(function(res){
   console.log(res.data)
   setStorage(res.data)
 
 })
 .catch(function(res){
    console.log("j'arrive pas a avoir acces au seances")
 })

},[])

const handleDate = () =>{
    const date = [...storage]
    date.sort((a,b) => new Date(a.date)-new Date(b.date))
    setStorage(date)
}
    return (
    <div className='flex flex-col justify-center items-center'>
       
            <label className='text-center ' htmlFor="recherche">Recherche D'une seance</label>
            <input className='bg-gray-100' type="text" />
        
       <ul className=''>
        {storage.map((item)=>(
            <li key={item.id}>
                📅 {item.date} —
                🥋 {item.type} —
                 🧠 note : {item.note} 
            </li>
        ))}
        </ul>
        <button className='mt-3 py-4 bg-gray-400 rounded-xl p-4' onClick={handleDate}>
            Trier par date
        </button>
    </div>
  )
}

export default Historique