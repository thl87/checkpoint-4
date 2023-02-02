import React, { useState } from "react";
import "../assets/Gestion.css";
import axios from "axios";
import Header from "./Header";
// import SearchBar from "./SearchBar";
// import Animaux from "./Animaux";

function Gestion() {
  const [nomAnimal, setNomAnimal] = useState("");
  const [typeAnimal, setTypeAnimal] = useState("");
  const [ageAnimal, setAgeAnimal] = useState("");
  const [zoo, setZoo] = useState("");

  const getNewAnimal = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/animal/`, {
      nomAnimal,
      typeAnimal,
      ageAnimal,
      zoo,
    });
    setNomAnimal("");
    setTypeAnimal("");
    setAgeAnimal("");
    setZoo("");
  };

  //   useEffect(() => {
  //     getNewAnimal();
  //   }, []);

  return (
    <div>
      <Header />
      <form className="ajoutAnimal">
        Ajout d'un animal
        <input
          type="text"
          className="inputNom"
          placeholder="Nom de l'animal"
          name="nom"
          value={nomAnimal}
          onChange={(e) => setNomAnimal(e.target.value)}
        />
        <input
          type="text"
          className="inputType"
          placeholder="Type d'animal"
          name="type"
          value={typeAnimal}
          onChange={(e) => setTypeAnimal(e.target.value)}
        />
        <input
          type="text"
          className="inputAge"
          placeholder="Âge de l'animal"
          name="age"
          value={ageAnimal}
          onChange={(e) => setAgeAnimal(e.target.value)}
        />
        <input
          type="text"
          className="inputZoo"
          placeholder="Localisation"
          name="zoo"
          value={zoo}
          onChange={(e) => setZoo(e.target.value)}
        />
      </form>
      <button type="button" onClick={getNewAnimal}>
        Ajouter l'animal
      </button>
    </div>
  );
}

export default Gestion;
