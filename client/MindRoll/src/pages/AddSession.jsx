
import {useState,React} from 'react'



const AddSession = () => {
  
  
    const [formData,setFormData] = useState({
        date:'',
        duree:'',
        Type:'',
        note:'',
        soumisison:''
    
    })
    const handleChange = () => {
     setFormData([...formData,
        [e.target.name],e.target.value
     ])
    }
  
    return (
   
   
   <div className='flex flex-col justify-center items-center py-7 '>
       <h1 className='text-3xl '>Ajout D'une séance </h1>
      
      <form className=' bg-gray-600 rounded-lg  h-auto w-auto '>
      {/**date */}
       <div className='flex items-center py-3'>
        <label htmlFor="">Date</label>
        <input  className='bg-gray-200'
        type="date"
        value={formData.date} 
        onChange={handleChange}
        />
       </div>
        {/**duree */}
        <div>
            <label htmlFor="">Durée</label>
            <input  className='bg-gray-200'
        type="number" 
        onChange={handleChange}/>
       
        </div>

        {/**Type*/}
        <div>
            <label htmlFor="">Type</label>
            <input  className='bg-gray-200'
        type="select" 
        onChange={handleChange}/>
  
        </div>

        {/**note*/}
        <div>
            <label htmlFor="">Note</label>
            <input  className='bg-gray-200'
        type="number" 
        onChange={handleChange}/>
        </div>

        {/**sSoumission reussi */}
        <div>
            <label htmlFor="">Soumission </label>
            <input  className='bg-gray-200'
        type="textarea" 
        onChange={handleChange}/>
        </div>
        <div className="py-3 text-center">
            <button className="rounded-lg p-2 bg-gray-700">Envoyer</button>
        </div>
      </form>

    </div>
    
  )
}

export default AddSession