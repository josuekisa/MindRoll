import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <div >
            <ul  className='flex flex-row gap-3 justify-center'>
                <Link to={'/'}>Accueil</Link>
                <Link to={'/addSession'}>Ajout sessions</Link>
                <Link to={'/sessionList'}>Listes seances</Link>
                <Link>Progression</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar