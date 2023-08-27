const express = require("express");
const { productValidation } = require("../validations");
const { productController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Product */
router.post(
  "/create-Product",
  validate(productValidation.createProduct),
  productController.createProduct
);
/** Get Product list */
router.get(
  "/Product-list",
  productController.getProductList
);

/** Delete Product */
router.delete(
  "/delete-Product/:ProductId",
  productController.deleteProduct
);

module.exports = router;
