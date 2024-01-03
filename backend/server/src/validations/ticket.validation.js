const Joi = require("joi");
const { objectId } = require("./custom.validation");

const addTicket = {
  body: Joi.object().keys({
    bookedSeats: Joi.number().required(),
    show_id: Joi.string().required().custom(objectId),
    bookedSeatNumber: Joi.array().items(Joi.number().required()).required(),
  }),
};

const getTicketById = {
  params: Joi.object().keys({
    ticket_id: Joi.string().required().custom(objectId),
  }),
};

module.exports = { addTicket, getTicketById };
