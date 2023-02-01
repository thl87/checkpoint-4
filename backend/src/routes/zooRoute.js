const router = require("express").Router();
const zooController = require("../controllers/zooController");

router.get("/", zooController.getAllZoos);
router.get("/:id", zooController.getZoosById);
router.put("/:id", zooController.updateZoo);
router.post("/", zooController.createZoo);
router.delete("/:id", zooController.deleteZoo);

module.exports = router;
