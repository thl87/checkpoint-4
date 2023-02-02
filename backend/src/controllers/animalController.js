const animalModel = require("../models/AbstractManager");

const createAnimal = (req, res) => {
  const { nomAnimal, typeAnimal, ageAnimal, zoo, id } = req.body;

  animalModel
    .create(nomAnimal, typeAnimal, ageAnimal, zoo, id)
    .then(([result]) => {
      res.status(200).send([result]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Création impossible");
    });
};

const getAllAnimals = (req, res) => {
  animalModel
    .findAll()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getAnimalsById = (req, res) => {
  animalModel
    .findById(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateAnimal = async (req, res) => {
  try {
    const { nomAnimal, typeAnimal, ageAnimal, zoo, veterinaire, id } = req.body;
    const [result] = await animalModel.update(
      nomAnimal,
      typeAnimal,
      ageAnimal,
      zoo,
      veterinaire,
      id
    );
    if (result.affectedRows > 0) {
      return res.status(201).send(result);
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

const deleteAnimal = async (req, res) => {
  try {
    const [result] = await animalModel.destroy(req.params.id);
    if (result.affectedRows > 0) {
      return res.status(200).send("Animal supprimé");
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

module.exports = {
  createAnimal,
  getAnimalsById,
  getAllAnimals,
  updateAnimal,
  deleteAnimal,
};
