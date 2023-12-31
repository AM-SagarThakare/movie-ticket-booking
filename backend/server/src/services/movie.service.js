const { Movie } = require("../models");

const addMovie = async (payload) => {
  return Movie.create(payload);
};

const getAllMovies = async () => {
  return await Movie.find();
};

const getMovieById = async (movie_id) => {
  return await
    Movie.findById(movie_id).populate('theatre');
};

module.exports = { addMovie, getAllMovies, getMovieById };
