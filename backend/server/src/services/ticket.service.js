const { Ticket } = require("../models");

const addTicket = async (payload) => {
  return await Ticket.create(payload);
};

const getTicketById = async (ticket_id) => {

  return await Ticket.findOne({ _id: ticket_id }).populate('show_id');
};

module.exports = { addTicket, getTicketById };
