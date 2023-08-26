const { Grocery } = require("../models");

/**
 * Create Grocery
 * @param {object} reqBody
 * @returns {Promise<Grocery>}
 */
const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody);
};

/**
 * Get Grocery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Grocery>}
 */
const getGroceryList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Grocery.find();
};

/**
 * Get Grocery details by id
 * @param {ObjectId} GroceryId
 * @returns {Promise<Grocery>}
 */
const getGroceryById = async (GroceryId) => {
  return Grocery.findById(GroceryId);
};

/**
 * Delete Grocery
 * @param {ObjectId} GroceryId
 * @returns {Promise<Grocery>}
 */
const deleteGrocery = async (GroceryId) => {
  return Grocery.findByIdAndDelete(GroceryId);
};

module.exports = {
    createGrocery,
    getGroceryList,
    getGroceryById,
    deleteGrocery
};