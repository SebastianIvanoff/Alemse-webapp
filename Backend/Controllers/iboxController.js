const router = require("express").Router();
const iboxModel = require("../Models/iboxModel");

router.post("/", iboxModel.addIbox); //POST/
router.get("/", iboxModel.getAlliboxes); //GET
router.get("/:id", iboxModel.getOneIbox); //GET
router.put("/:id", iboxModel.updateIboxPrice); //PUT
router.delete("/:id", iboxModel.removeIbox); //DELETE

module.exports = router;
