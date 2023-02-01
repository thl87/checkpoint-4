const connection = require("../config/db");

const create = (nomAnimal, typeAnimal, ageAnimal, zoo) => {
  return connection.query(
    "INSERT INTO animal (nomAnimal, typeAnimal, ageAnimal, zoo_idZoo) VALUES (?,?,?,?)",
    [nomAnimal, typeAnimal, ageAnimal, zoo]
  );
};

// read
const findAll = () => {
  return connection.query("SELECT * FROM  animal;");
};

const findById = (id) => {
  return connection.query("SELECT * FROM animal WHERE IdAnimaux =?", [id]);
};

const update = (nomAnimal, typeAnimal, ageAnimal, zoo, veterinaire, id) => {
  return connection.query(
    `UPDATE animal SET nomAnimal=?, typeAnimal=?, ageAnimal=?, zoo_idZoo=?, veterinaire_idVeterinaire=?  WHERE idAnimaux=?`,
    [nomAnimal, typeAnimal, ageAnimal, zoo, veterinaire, id]
  );
};

// delete
const destroy = (id) => {
  return connection.query("DELETE FROM animal WHERE idAnimaux=?", [id]);
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  destroy,
};
