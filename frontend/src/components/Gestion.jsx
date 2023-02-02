import React, { useState } from "react";
import "../assets/Gestion.css";
import axios from "axios";
import PropTypes from "prop-types";
import Animaux from "./Animaux";

function Gestion({ animaux, getAnimal }) {
  const [nomAnimal, setNomAnimal] = useState("");
  const [typeAnimal, setTypeAnimal] = useState("");
  const [ageAnimal, setAgeAnimal] = useState("");
  const [zoo, setZoo] = useState("");

  const getNewAnimal = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/animal/`, {
        nomAnimal,
        typeAnimal,
        ageAnimal,
        zoo,
      })
      .then(() => getAnimal());
    setNomAnimal("");
    setTypeAnimal("");
    setAgeAnimal("");
    setZoo("");
  };

  return (
    <div>
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
      <button className="ajoutButton" type="button" onClick={getNewAnimal}>
        Ajouter l'animal
      </button>
      <Animaux animaux={animaux} getAnimal={getAnimal} />
      <button
        className="suppressionButton"
        type="button"
        // onClick={getNewAnimal}
      >
        Supprimer l'animal
      </button>
    </div>
  );
}

Gestion.propTypes = {
  animaux: PropTypes.node.isRequired,
  getAnimal: PropTypes.func.isRequired,
};

export default Gestion;
