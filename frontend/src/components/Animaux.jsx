import React from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "../assets/Animaux.css";
import CarteAnimal from "./CarteAnimal";
import SearchBar from "./SearchBar";

function Animaux({ animaux }) {
  return (
    <div>
      {/* <NavLink to="/">Retour</NavLink> */}
      Animaux
      <SearchBar />
      <div className="animalContainer">
        {animaux &&
          animaux.map((a) => (
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

Animaux.propTypes = {
  animaux: PropTypes.node.isRequired,
};

export default Animaux;
