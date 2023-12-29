const { Movie } = require("../models");

const addMovie = async (payload) => {
  return  Movie.create(payload);
};

module.exports = { addMovie };
