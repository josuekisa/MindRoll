import { Routes, BrowserRouter, Route } from "react-router-dom";
import AddSession from "./pages/AddSession";
import Homepage from "./pages/Homepage";
import SessionList from "./pages/SessionList";
import Historique from "./pages/Historique";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Toutes les routes qui ont le Navbar passent ici */}
          <Route path="/" element={<Homepage />} />
          <Route path="/AddSession" element={<AddSession />} />
          <Route path="/sessionList" element={<SessionList />} />
          <Route path="/Historique" element={<Historique />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
