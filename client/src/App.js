import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from './Components/Home/Home';
import { Team } from './Components/Team';
import { Contact } from './Components/Contact/Contact';
import { NavBar } from "./Components/NavBar";
import { FooterGlobal } from "./Components/FooterGlobal";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <FooterGlobal />
    </div>
  );
}

export default App;
