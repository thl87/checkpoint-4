import React, { useState } from "react";
import "../assets/SearchBar.css";

function SearchBar() {
  const [triParNom, setTriParNom] = useState("");
  const handleTriNom = () => {
    setTriParNom(triParNom);
  };
  return (
    <div>
      <fieldset className="searchBar">
        <legend>Chercher un animal:</legend>

        <div>
          <input
            type="checkbox"
            id="nom"
            name="nom"
            checked={triParNom}
            onChange={handleTriNom}
          />
          <label htmlFor="nom">Par nom</label>
        </div>

        <div>
          <input type="checkbox" id="age" name="age" />
          <label htmlFor="age">Par âge</label>
        </div>

        <div>
          <input type="checkbox" id="espec" name="espece" />
          <label htmlFor="age">Par espèce</label>
        </div>

        <div>
          <input type="checkbox" id="zoo" name="zoo" />
          <label htmlFor="age">Par zoo</label>
        </div>
      </fieldset>
    </div>
  );
}

export default SearchBar;
