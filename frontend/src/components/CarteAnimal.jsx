import React from "react";
import PropTypes from "prop-types";
import "../assets/CarteAnimal.css";

function CarteAnimal({
  nom,
  espece,
  age,
  localisation,
  setSelected,
  idAnimaux,
}) {
  return (
    <div
      className="carteAnimal"
      onClick={() => setSelected(idAnimaux)}
      role="button"
      onKeyDown={null}
      tabIndex={0}
    >
      <div className="nomAnimal">Nom : {nom}</div>
      <div className="espece">Espèce : {espece}</div>
      <div className="age">Age : {age} ans</div>
      <div className="localisation">Localisation : {localisation}</div>
      <div className="transfert">Transférer </div>
    </div>
  );
}

CarteAnimal.propTypes = {
  nom: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  espece: PropTypes.string.isRequired,
  localisation: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  idAnimaux: PropTypes.number.isRequired,
};

export default CarteAnimal;
