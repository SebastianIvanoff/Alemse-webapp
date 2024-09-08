const router = require("express").Router();
const productModel = require("../Models/productModel");

router.post("/", productModel.addProduct);
router.get("/", productModel.getAllProducts);
router.get("/:id", productModel.getOneProduct);
router.put("/:id", productModel.updateProductPrice);
router.delete("/:id", productModel.removeProduct);

module.exports = router;
