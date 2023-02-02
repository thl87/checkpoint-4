const connection = require("../config/db");

const create = (nomZoo, nbAnimaux) => {
  return connection.query("INSERT INTO zoo (nomZoo, nbAnimaux) VALUES (?,?)", [
    nomZoo,
    nbAnimaux,
  ]);
};

const findAll = () => {
  return connection.query("SELECT * FROM zoo;");
};

const findById = (id) => {
  return connection.query("SELECT * FROM zoo WHERE IdZoo =?", [id]);
};

const update = (nomZoo, nbAnimaux, id) => {
  return connection.query(
    "UPDATE zoo SET nomZoo=?, nbAnimaux=? WHERE idZoo=?",
    [nomZoo, nbAnimaux, id]
  );
};

const destroy = (id) => {
  return connection.query("DELETE FROM zoo WHERE idZoo=?", [id]);
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  destroy,
};
