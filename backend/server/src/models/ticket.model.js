const mongoose = require("mongoose");
const { private } = require("./plugins");

const ticketSchema = mongoose.Schema({
  ticketNo: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  show_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Show",
  },
  bookedSeats: Number,
  bookedSeatNumber: [{ type: Number }],
  ticketStatus: {
    type: String,
    default: "temporaryBooked",
  },
  paidAmount: {
    type: Number,
    default: 0,
  },
});

ticketSchema.plugin(private);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
