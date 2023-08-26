const { Stationary } = require("../models");

/**
 * Create Stationary
 * @param {object} reqBody
 * @returns {Promise<Stationary>}
 */
const createStationary = async (reqBody) => {
  return Stationary.create(reqBody);
};

/**
 * Get Stationary list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Stationary>}
 */
const getStationaryList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Stationary.find();
};

/**
 * Get Stationary details by id
 * @param {ObjectId} StationaryId
 * @returns {Promise<Stationary>}
 */
const getStationaryById = async (StationaryId) => {
  return Stationary.findById(StationaryId);
};

/**
 * Delete Stationary
 * @param {ObjectId} StationaryId
 * @returns {Promise<Stationary>}
 */
const deleteStationary = async (StationaryId) => {
  return Stationary.findByIdAndDelete(StationaryId);
};

module.exports = {
    createStationary,
    getStationaryList,
    getStationaryById,
    deleteStationary
};