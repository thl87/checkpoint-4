import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import axios from "axios";

import "../assets/Animaux.css";
import Header from "./Header";
import CarteAnimal from "./CarteAnimal";
import SearchBar from "./SearchBar";

function Animaux() {
  const [animaux, setAnimaux] = useState([]);

  const getAnimal = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/animal/`)
      .then((res) => {
        // console.log(res.data);
        setAnimaux(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAnimal();
  }, []);

  return (
    <div>
      <Header />
      {/* <NavLink to="/">Retour</NavLink> */}
      Animaux
      <SearchBar />
      <div className="animalContainer">
        {animaux.map((a) => (
          <CarteAnimal
            key={a.idAnimaux}
            nom={a.nomAnimal}
            espece={a.typeAnimal}
            age={a.ageAnimal}
            localisation={a.zoo_idZoo}
          />
        ))}
      </div>
    </div>
  );
}

export default Animaux;
