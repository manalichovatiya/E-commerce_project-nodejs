const { Product } = require("../models");

/**
 * Create Product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**
 * Get Product list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Product>}
 */
const getProductList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Product.find();
};

/**
 * Get Product details by id
 * @param {ObjectId} ProductId
 * @returns {Promise<Product>}
 */
const getProductById = async (ProductId) => {
  return Product.findById(ProductId);
};

/**
 * Delete Product
 * @param {ObjectId} ProductId
 * @returns {Promise<Product>}
 */
const deleteProduct = async (ProductId) => {
  return Product.findByIdAndDelete(ProductId);
};

module.exports = {
    createProduct,
    getProductList,
    getProductById,
    deleteProduct
};