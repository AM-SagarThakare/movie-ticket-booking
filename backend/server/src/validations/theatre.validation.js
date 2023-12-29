const Joi = require("joi");
const { objectId } = require("./custom.validation");

const addTheatre = {
  body: Joi.object().keys({
    name: Joi.string().trim().required(),
    movies: Joi.array().items(Joi.string().required().custom(objectId)),
    totalSeats: Joi.number().required(),
    bookedSeats: Joi.array().items(Joi.number().required()),    
  }),
};

module.exports = { addTheatre };
