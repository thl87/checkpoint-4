import { Routes, Route } from "react-router-dom";

import "./App.css";

import Animaux from "@components/Animaux";
import Zoo from "@components/Zoo";
import Gestion from "@components/Gestion";

import CarteAnimal from "@components/CarteAnimal";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animaux" element={<Animaux />} />
        <Route path="/zoo" element={<Zoo />} />
        <Route path="/gestion" element={<Gestion />} />
        <Route path="/animalcarte" element={<CarteAnimal />} />
      </Routes>
    </div>
  );
}

export default App;
