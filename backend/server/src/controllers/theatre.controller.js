const httpStatus = require("http-status");
const { theatreService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const addTheatre = catchAsync(async (req, res) => {
  const newTheatre = await theatreService.addTheatre({ ...req.body });
  res.status(httpStatus.CREATED).send(newTheatre);
});

module.exports = { addTheatre };
