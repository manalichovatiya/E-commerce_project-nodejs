const Joi = require("joi");

/** create Bus */
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_description: Joi.string().required().trim(),
    product_price: Joi.number().integer().required(),
  }),
};

module.exports = {
    createProduct
}