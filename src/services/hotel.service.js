const { Hotel } = require("../models");

/**
 * Create Hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

/**
 * Get Hotel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Hotel>}
 */
const getHotelList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Hotel.find();
};

/**
 * Get Hotel details by id
 * @param {ObjectId} HotelId
 * @returns {Promise<Hotel>}
 */
const getHotelById = async (HotelId) => {
  return Hotel.findById(HotelId);
};

/**
 * Delete Hotel
 * @param {ObjectId} HotelId
 * @returns {Promise<Hotel>}
 */
const deleteHotel = async (HotelId) => {
  return Hotel.findByIdAndDelete(HotelId);
};

module.exports = {
    createHotel,
    getHotelList,
    getHotelById,
    deleteHotel
};