import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import CarteZoo from "./CarteZoo";
import "../assets/Zoo.css";

function Zoo() {
  const [zoo, setZoo] = useState([]);

  const getZoo = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/zoo/`)
      .then((res) => {
        // console.log(res.data);
        setZoo(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getZoo();
  }, []);

  return (
    <div>
      <Header />
      Zoo
      <div className="zooContainer">
        {zoo.map((z) => (
          <CarteZoo nom={z.nomZoo} nbAnimaux={z.nbAnimaux} />
        ))}
      </div>
    </div>
  );
}

export default Zoo;
