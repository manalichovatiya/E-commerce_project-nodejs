const { Jewellery } = require("../models");

/**
 * Create Jewellery
 * @param {object} reqBody
 * @returns {Promise<Jewellery>}
 */
const createJewellery = async (reqBody) => {
  return Jewellery.create(reqBody);
};

/**
 * Get Jewellery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Jewellery>}
 */
const getJewelleryList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Jewellery.find();
};

/**
 * Get Jewellery details by id
 * @param {ObjectId} JewelleryId
 * @returns {Promise<Jewellery>}
 */
const getJewelleryById = async (JewelleryId) => {
  return Jewellery.findById(JewelleryId);
};

/**
 * Delete Jewellery
 * @param {ObjectId} JewelleryId
 * @returns {Promise<Jewellery>}
 */
const deleteJewellery = async (JewelleryId) => {
  return Jewellery.findByIdAndDelete(JewelleryId);
};

module.exports = {
    createJewellery,
    getJewelleryList,
    getJewelleryById,
    deleteJewellery
};