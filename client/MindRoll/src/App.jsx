import { Routes, BrowserRouter, Route } from "react-router-dom";
import AddSession from "./pages/AddSession";
import Homepage from "./pages/Homepage";
import SessionList from "./pages/SessionList";
import Historique from "./pages/Historique";
import Layout from "./layout/Layout";
import { Register } from "./pages/Register";
import Login from "./pages/Login";
import Progression from "./pages/Progression";
import { sessionContext } from "./components/SessionContext";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  return (
    <sessionContext.Provider value={{ list, setList }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/AddSession" element={<AddSession />} />
            <Route path="/sessionList" element={<SessionList />} />
            <Route path="/Progression" element={<Progression />} />
            <Route path="/Historique" element={<Historique />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </sessionContext.Provider>
  );
}

export default App;
