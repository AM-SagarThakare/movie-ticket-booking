const { Movie } = require("../models");

const addMovie = async (payload) => {
  return Movie.create(payload);
};

const getAllMovies = async () => {
  return await Movie.find();
};

module.exports = { addMovie, getAllMovies };
