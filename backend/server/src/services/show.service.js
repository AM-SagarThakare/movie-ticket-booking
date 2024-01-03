const { Show, Movie } = require("../models");

const getShow = async (paramsBody) => {
  const { movie_id, theatre_id, time } = paramsBody;

  return await Show.findOne({ movie_id, theatre_id, time });
};

const addShow = async (payload) => {
  return await Show.create(payload);
};

const getShowById = async (show_id) => {
  return await Show.findById(show_id);
};

const updateShowById = async (show_id, updatedBody) => {
  return await Show.findOneAndUpdate({ _id: show_id }, updatedBody,{ new: true });
};
module.exports = { getShow, addShow, getShowById, updateShowById };
