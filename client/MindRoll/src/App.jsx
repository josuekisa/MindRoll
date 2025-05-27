
import Navbar from './components/Navbar'
import { Routes, BrowserRouter, Route } from "react-router"
import AddSession from './pages/AddSession'
import Homepage from './pages/Homepage'
import SessionList from './pages/SessionList'




function App() {


  return (
    
     <BrowserRouter>
     <Navbar/>  
     <Routes>
      <Route
      path='/'
     element=
    
     {
     <>
     <Homepage/>
     </>
     }>

      </Route>
      <Route path='/AddSession' element={<AddSession />}></Route>
      <Route path='/sessionList' element={<SessionList />}></Route>
     </Routes>

     </BrowserRouter>
        
    
  )
}

export default App
