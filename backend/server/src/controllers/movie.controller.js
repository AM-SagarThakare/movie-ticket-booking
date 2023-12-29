const httpStatus = require("http-status");
const { movieService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const addMovie = catchAsync(async (req, res) => {
  const newMovie = await movieService.addMovie({ ...req.body });

  res.status(httpStatus.CREATED).send(newMovie);
});

const getAllMovies = catchAsync(async (req, res) => {
  const result = await movieService.getAllMovies();
  res.status(httpStatus.OK).send(result);
});

const getMovieById = catchAsync(async (req, res) => {
  const result =await movieService.getMovieById(req.params.movie_id);
  res.status(httpStatus.OK).send(result);
});

module.exports = { addMovie, getAllMovies, getMovieById };
