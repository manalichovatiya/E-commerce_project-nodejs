const { Movie } = require("../models");

/**
 * Create Movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (reqBody) => {
  return Movie.create(reqBody);
};

/**
 * Get Movie list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Movie>}
 */
const getMovieList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Movie.find();
};

/**
 * Get Movie details by id
 * @param {ObjectId} MovieId
 * @returns {Promise<Movie>}
 */
const getMovieById = async (MovieId) => {
  return Movie.findById(MovieId);
};

/**
 * Delete Movie
 * @param {ObjectId} MovieId
 * @returns {Promise<Movie>}
 */
const deleteMovie = async (MovieId) => {
  return Movie.findByIdAndDelete(MovieId);
};

module.exports = {
    createMovie,
    getMovieList,
    getMovieById,
    deleteMovie
};