const Joi = require("joi");
const { objectId } = require("./custom.validation");

const addMovie = {
  body: Joi.object().keys({
    name: Joi.string().trim().required(),
    theatre: Joi.array().items(Joi.string().required()),
    audio: Joi.array().items(Joi.string().required()),
    trailer: Joi.string().required(),
    rating: Joi.number(),
    displayImg: Joi.string(),
    coverImg: Joi.string()
  }),
};
const getMovieById = {
  params: Joi.object().keys({
    movie_id: Joi.string().required().custom(objectId),
  }),
};
module.exports = { addMovie, getMovieById };
