const express = require("express");
const { jewelleryValidation } = require("../validations");
const { jewelleryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Jewellery */
router.post(
  "/create-Jewellery",
  validate(jewelleryValidation.createJewellery),
  jewelleryController.createJewellery
);
/** Get Jewellery list */
router.get(
  "/Jewellery-list",
  jewelleryController.getJewelleryList
);

/** Delete Jewellery */
router.delete(
  "/delete-Jewellery/:JewelleryId",
  jewelleryController.deleteJewellery
);

module.exports = router;
