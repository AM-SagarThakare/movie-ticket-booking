const httpStatus = require("http-status");
const { showService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getShow = catchAsync(async (req, res) => {
  const result = await showService.getShow({ ...req.params });
  res.status(httpStatus.OK).send(result);
});

const addShow = catchAsync(async (req, res) => {
  const result = await showService.addShow({ ...req.body });
  res.send(result);
});
module.exports = { getShow, addShow };
