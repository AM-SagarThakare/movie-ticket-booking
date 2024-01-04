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


const updateTicketById = catchAsync(async (req, res) => {

  let show = await showService.getShowById(req.body.show_id)

  const updatedBlockedSeats = removeBookedSeats(show.temporaryBlockedSeats, req.body.bookedSeatNumber)
  const updatedBookedSeats = updateBookedSeats(show.bookedSeats, req.body.bookedSeatNumber)

  await showService.updateShowById(req.body.show_id,
    {
      temporaryBlockedSeats: updatedBlockedSeats,
      bookedSeats: updatedBookedSeats
    })

  const result = await ticketService.updateTicketById(req.params.ticket_id, { paidAmount: req.body.paidAmount, ticketStatus: "booked" })
  res.status(httpStatus.OK).send(result)
})

function removeBookedSeats(temporaryBlockedSeats, bookedSeatNumber) {

  let filteredData = temporaryBlockedSeats.filter(ele => !bookedSeatNumber.includes(ele));
  return filteredData.sort((a, b) => a - b)
}

function updateBookedSeats(bookedSeats, bookedSeatNumber) {
  bookedSeats.push(...bookedSeatNumber)
  return bookedSeats.sort((a, b) => a - b)
}


module.exports = { addTicket, getTicketById, updateTicketById };
