
import {useState,React} from 'react'
import axios from 'axios'



const AddSession = () => {
  
  
    const [formData,setFormData] = useState({
        date:'',
        duree:'',
        type:'',
        note:'',
        soumissionsReussies:''
    
    })
    const handleChange = (e) => {
     setFormData({...formData,
        [e.target.name]:e.target.value
     } )
    }
  const handleSubmit = (e)=>{
     console.log(formData)
    axios.post('http://localhost:5000/sessions',formData)
    .then(function(res){
        console.log(res.data)
    })
    .catch(function(error){
        console.log("j'ai pas reussi a récuperer les données")
    })
    e.preventDefault()
    console.log(formData)
  }
    return (
   
   
   <div className='flex flex-col justify-center items-center py-7 '>
       <h1 className='text-3xl '>Ajout D'une séance </h1>
      
      <form className=' bg-gray-600 rounded-lg  h-auto w-auto '>
      {/**date */}
       <div className='flex items-center py-3'>
        <label htmlFor="">Date</label>
        <input  className='bg-gray-200'
        name='date'
        type="date"
        value={formData.date} 
        onChange={handleChange}
        />
       </div>
        {/**duree */}
        <div>
            <label htmlFor="">Durée</label>
            <input  className='bg-gray-200'
            name='duree'
        type="number" 
          value={formData.duree} 
        onChange={handleChange}/>
       
        </div>

        {/**Type*/}
        <div>
            <label htmlFor="">Type</label>
            <input  className='bg-gray-200'
       name='type'
       type="select" 
          value={formData.type} 
        onChange={handleChange}/>
  
        </div>

        {/**note*/}
        <div>
            <label htmlFor="">Note</label>
            <input  className='bg-gray-200'
            name='note'
        type="number" 
          value={formData.note} 
        onChange={handleChange}/>
        </div>

        {/**sSoumission reussi */}
        <div>
            <label htmlFor="">Soumission </label>
            <input  className='bg-gray-200'
            name='soumissionsReussies'
        type="textarea" 
          value={formData.soumissionsReussies} 
        onChange={handleChange}/>
        </div>
        <div className="py-3 text-center">
            <button onClick={handleSubmit} className="rounded-lg p-2 bg-gray-700">Envoyer</button>
        </div>
      </form>

    </div>
    
  )
}

export default AddSession