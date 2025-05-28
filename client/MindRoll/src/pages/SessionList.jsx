import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { MdDeleteForever ,MdOutlineDeleteForever} from "react-icons/md";

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
  
  const handleDelete = (id)=> {
    axios.delete(`http://localhost:3000/sessions/${id}`)
       .then(function(res){
        const newList = list.filter((items)=> items.id !== id)
     setList(newList)
       })
        .catch(function(error){
          console.log("j'ai pas reussi a supprimer l'id")
        })
  }
    return (
    <div>
        <ul className=' flex flex-col'>
          {list.map((list)=> (
           <li key={list.id}> 
           📅 {list.date} —
            🥋 {list.type} —
             🧠 note : {list.note} 
             <button onClick={()=>handleDelete(list.id)} > <MdOutlineDeleteForever className='bg-red-200' /> </button>
           </li>
          
          ))}
        
        </ul>
   
   </div>
  )
}

export default SessionList