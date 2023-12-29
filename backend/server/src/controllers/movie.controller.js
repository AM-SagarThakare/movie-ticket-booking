const httpStatus = require("http-status");
const { movieService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const addMovie = catchAsync(async (req, res) => {
  const newMovie = await movieService.addMovie({ ...req.body });
  console.log(newMovie);
  res.status(httpStatus.CREATED).send(newMovie);
});

module.exports = { addMovie };
