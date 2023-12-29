const Joi = require("joi");

const addMovie = {
  body: Joi.object().keys({
    name: Joi.string().trim().required(),
    rating: Joi.number(),
    audio: Joi.array().items(Joi.string().required()),
    trailer: Joi.string().required(),
  }),
};

module.exports = { addMovie };
