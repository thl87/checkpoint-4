import React from "react";
import PropTypes from "prop-types";
import "../assets/CarteZoo.css";

function CarteZoo({ nom, nbAnimaux }) {
  return (
    <div className="carteZoo">
      <div className="nomZoo">{nom}</div>
      <div className="nbAnimaux">Animaux présents : {nbAnimaux}</div>
    </div>
  );
}

CarteZoo.propTypes = {
  nom: PropTypes.string.isRequired,
  nbAnimaux: PropTypes.number.isRequired,
};

export default CarteZoo;
