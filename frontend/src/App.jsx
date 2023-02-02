import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Animaux from "@components/Animaux";
import Zoo from "@components/Zoo";
import Gestion from "@components/Gestion";
import Header from "@components/Header";
import CarteAnimal from "@components/CarteAnimal";

function App() {
  const [animaux, setAnimaux] = useState([]);

  const getAnimal = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/animal/`)
      .then((res) => {
        setAnimaux(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAnimal();
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Animaux animaux={animaux} getAnimal={getAnimal} />}
        />
        <Route path="/zoo" element={<Zoo />} />
        <Route
          path="/gestion"
          element={<Gestion animaux={animaux} getAnimal={getAnimal} />}
        />
        <Route path="/animalcarte" element={<CarteAnimal />} />
      </Routes>
    </div>
  );
}

export default App;
