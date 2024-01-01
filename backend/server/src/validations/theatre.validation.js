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

const updateTheatreById = {
  body: Joi.object().keys({
    name: Joi.string().trim(),
    movies: Joi.array().items({
      movie_id: Joi.string().custom(objectId),
      time: Joi.array().items(
        Joi.string().required()
      ),
      ticket: Joi.number().required(),
      bookedSeats: Joi.array().items(
        Joi.number().min(1).max(50).required()
      ),
      temporaryBlockedSeats: Joi.array().items(
        Joi.number().min(1).max(50).required()
      )
    }),
    totalSeats: Joi.number(),
    bookedSeats: Joi.array().items(Joi.number().required()),
  }),
  params: Joi.object().keys({
    theatre_id: Joi.string().required().custom(objectId)
  }).required()
}

module.exports = { addTheatre, updateTheatreById };
