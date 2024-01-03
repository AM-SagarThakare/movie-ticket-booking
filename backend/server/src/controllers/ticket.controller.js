const httpStatus = require("http-status");
const { ticketService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const addTicket = catchAsync(async (req, res) => {

  payload = {
    ticketNo: generateTicketNo(),
    bookedSeats: req.body.bookedSeats,
    user_id: req.user,
    show_id: req.body.show_id,
    bookedSeatNumber : req.body.bookedSeatNumber
  };
  console.log('payload',payload);

  const result = await ticketService.addTicket(payload);
  res.status(httpStatus.CREATED).send(result);
});

const generateTicketNo = () => {
  return Math.floor(Math.random() * 10000);
};

module.exports = { addTicket };
