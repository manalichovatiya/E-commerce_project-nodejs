const { Users } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<Users>}
 */
const createUser = async (reqBody) => {
  return Users.create(reqBody);
};

/**
 * Get user list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Users>}
 */
const getUserList = async () => {
  // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Users.find();
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<Users>}
 */
const getUserByEmail = async (email) => {
  return Users.findOne({ email });
};

/**
 * Get user details by id
 * @param {ObjectId} userId
 * @returns {Promise<Users>}
 */
const getUserById = async (userId) => {
  return Users.findById(userId);
};

/**
 * user details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<Users>}
 */
const updateDetails = async (userId, updateBody) => {
  return Users.findByIdAndUpdate(userId, { $set: updateBody });
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<Users>}
 */
const deleteUser = async (userId) => {
  return Users.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  getUserByEmail,
  deleteUser,
};