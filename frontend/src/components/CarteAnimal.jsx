import React from "react";
import PropTypes from "prop-types";
import "../assets/CarteAnimal.css";

function CarteAnimal({ nom, espece, age, localisation }) {
  return (
    <div className="carteAnimal">
      carte animal
      <div className="nomAnimal">Nom :{nom}</div>
      <div className="espece">Espèce : {espece}</div>
      <div className="age">Age : {age} ans</div>
      <div className="localisation">Localisation : {localisation}</div>
      <div className="transfert">Transférer</div>
    </div>
  );
}

CarteAnimal.propTypes = {
  nom: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  espece: PropTypes.string.isRequired,
  localisation: PropTypes.string.isRequired,
};

export default CarteAnimal;
