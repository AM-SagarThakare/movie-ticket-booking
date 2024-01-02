const Joi = require("joi");
const { objectId } = require("./custom.validation");

const getShow = {
  params: Joi.object().keys({
    movie_id: Joi.string().custom(objectId).required(),
    theatre_id: Joi.string().custom(objectId).required(),
    time: Joi.string().required(),
  }),
};

module.exports = { getShow };
