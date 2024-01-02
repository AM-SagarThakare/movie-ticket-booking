const { Show, Movie } = require("../models");

const getShow = async (paramsBody) => {
  const { movie_id, theatre_id, time } = paramsBody;

  return await Show.findOne({ movie_id, theatre_id, time });
};

const addShow = async (payload) => {
  return await Show.create(payload);
};

module.exports = { getShow, addShow };
