import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import CarteAnimal from "./CarteAnimal";

function Animaux() {
  const animaux = [
    {
      nom: "Animal 1",
      espece: "Ours",
      age: 4,
      localisation: "zoo 1",
    },

    {
      nom: "Animal 2",
      espece: "Otarie",
      age: 2,
      localisation: "zoo 2",
    },
  ];
  return (
    <div>
      <Header />
      <NavLink to="/">Retour</NavLink>
      Animaux
      <div>
        {animaux.map((a) => (
          <CarteAnimal
            nom={a.nom}
            espece={a.espece}
            age={a.age}
            localisation={a.localisation}
          />
        ))}
      </div>
    </div>
  );
}

export default Animaux;
