const Joi = require("joi");
const { objectId } = require("./custom.validation");

const addMovie = {
  body: Joi.object().keys({
    name: Joi.string().trim().required(),
    rating: Joi.number(),
    audio: Joi.array().items(Joi.string().required()),
    trailer: Joi.string().required(),
  }),
};
const getMovieById = {
  params: Joi.object().keys({
    movie_id: Joi.string().required().custom(objectId),
  }),
};
module.exports = { addMovie, getMovieById };
