const httpStatus = require("http-status");
const { theatreService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const addTheatre = catchAsync(async (req, res) => {
  const newTheatre = await theatreService.addTheatre({ ...req.body });
  res.status(httpStatus.CREATED).send(newTheatre);
});

const updateTheatreById = catchAsync(async (req, res) => {
  const result = await theatreService.updateTheatreById(req.params.theatre_id, { ...req.body });
  res.status(httpStatus.OK).send(result)
})

module.exports = { addTheatre, updateTheatreById };
