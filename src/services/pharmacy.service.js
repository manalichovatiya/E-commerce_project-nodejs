const { Pharmacy } = require("../models");

/**
 * Create Pharmacy
 * @param {object} reqBody
 * @returns {Promise<Pharmacy>}
 */
const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody);
};

/**
 * Get Pharmacy list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Pharmacy.find();
};

/**
 * Get Pharmacy details by id
 * @param {ObjectId} PharmacyId
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyById = async (PharmacyId) => {
  return Pharmacy.findById(PharmacyId);
};

/**
 * Delete Pharmacy
 * @param {ObjectId} PharmacyId
 * @returns {Promise<Pharmacy>}
 */
const deletePharmacy = async (PharmacyId) => {
  return Pharmacy.findByIdAndDelete(PharmacyId);
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    getPharmacyById,
    deletePharmacy
};