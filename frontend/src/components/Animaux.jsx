import React from "react";
// import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "../assets/Animaux.css";
import CarteAnimal from "./CarteAnimal";
import SearchBar from "./SearchBar";

function Animaux({ animaux, setSelectedId }) {
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
              setSelected={setSelectedId}
              idAnimaux={a.idAnimaux}
            />
          ))}
      </div>
    </div>
  );
}

Animaux.propTypes = {
  animaux: PropTypes.node.isRequired,
  setSelectedId: PropTypes.func.isRequired,
};

export default Animaux;
