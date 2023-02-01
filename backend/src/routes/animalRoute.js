const router = require("express").Router();
const animalController = require("../controllers/animalController");

router.get("/", animalController.getAllAnimals);
router.get("/:id", animalController.getAnimalsById);
router.put("/:id", animalController.updateAnimal);
router.post("/", animalController.createAnimal);
router.delete("/:id", animalController.deleteAnimal);

module.exports = router;
