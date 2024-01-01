const { Movie } = require("../models");

const addMovie = async (payload) => {
  return Movie.create(payload);
};

const getAllMovies = async () => {
  return await Movie.find();
};

const getMovieById = async (movie_id) => {
  return await
    Movie.findById(movie_id).populate('theatre.theatre_id','-movies');
};

const updateMovieById = async (movie_id, updatedBody) => {
  return await Movie.findOneAndUpdate({_id: movie_id }, updatedBody);
}
module.exports = { addMovie, getAllMovies, getMovieById, updateMovieById };
