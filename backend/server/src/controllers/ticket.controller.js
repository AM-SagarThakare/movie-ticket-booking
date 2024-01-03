const httpStatus = require("http-status");
const { ticketService, showService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const { updateShowdata } = require("./show.controller");

const addTicket = catchAsync(async (req, res) => {
  const bookedSeatsNumber = req.body.bookedSeatNumber;

  payload = {
    ticketNo: generateTicketNo(),
    bookedSeats: req.body.bookedSeats,
    user_id: req.user,
    show_id: req.body.show_id,
    bookedSeatNumber: bookedSeatsNumber,
  };

  let result = await ticketService.addTicket(payload);

  const show = await showService.getShowById(result.show_id);

  const updatedData = updateShowdata(show, bookedSeatsNumber);

  await showService.updateShowById(show._id, {
    temporaryBlockedSeats: updatedData,
  });

  res.status(httpStatus.CREATED).send(result);
});

const generateTicketNo = () => {
  return Math.floor(Math.random() * 10000);
};

const getTicketById = catchAsync(async (req, res) => {
  const result = await ticketService.getTicketById(req.params.ticket_id);
  res.status(httpStatus.OK).send(result);
});

module.exports = { addTicket, getTicketById };
