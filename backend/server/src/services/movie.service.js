const { Movie } = require("../models");

const addMovie = async (payload) => {
  return Movie.create(payload);
};

const getAllMovies = async () => {
  return await Movie.find();
};

const getMovieById = async (movie_id) => {
  const a = await Movie.findById(movie_id);
  console.log(a);
  return a;
};

module.exports = { addMovie, getAllMovies, getMovieById };
