const { Category } = require("../models");

/**
 * category
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Category>}
 */
const getCategoryList = async (filter,options) => {
    // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
    return Category.find();
};
/**
 * Get Category by name
 * @param {string} category_name
 * @returns {Promise<Category>}
 */
const getCategoryByName = async (category_name) => {
  return Category.findOne({ category_name });
};

/**
 * Get Category details by id
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

/**
 * Category details update by id
 * @param {ObjectId} categoryId
 * @param {object} updateBody
 * @returns {Promise<Category>}
 */
const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

/**
 * Delete user
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryByName,
    getCategoryById,
    updateDetails,
    deleteCategory
}