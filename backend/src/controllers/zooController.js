const zooModel = require("../models/zooModel");

const createZoo = (req, res) => {
  const { nomZoo, nbAnimaux } = req.body;

  zooModel
    .create(nomZoo, nbAnimaux)
    .then(([result]) => {
      res.status(200).send([result]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Création impossible");
    });
};

const getAllZoos = (req, res) => {
  zooModel
    .findAll()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getZoosById = (req, res) => {
  zooModel
    .findById(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateZoo = async (req, res) => {
  try {
    const { nomZoo, nbAnimaux, id } = req.body;
    const [result] = await zooModel.update(nomZoo, nbAnimaux, id);
    if (result.affectedRows > 0) {
      return res.status(201).send(result);
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

const deleteZoo = async (req, res) => {
  try {
    const [result] = await zooModel.destroy(req.params.id);
    if (result.affectedRows > 0) {
      return res.status(200).send("Zoo supprimé");
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

module.exports = {
  createZoo,
  getZoosById,
  getAllZoos,
  updateZoo,
  deleteZoo,
};
