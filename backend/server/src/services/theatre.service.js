const { Theatre } = require("../models");

const addTheatre = async (payload) => {
  return await Theatre.create(payload);
};

const updateTheatreById = async (theatre_id, updatedBody) => {
  return await Theatre.findOneAndUpdate({ _id: theatre_id }, updatedBody);
};

const getTheatreById =async (theatre_id) => {
  return await Theatre.findById(theatre_id)
};
module.exports = { addTheatre, updateTheatreById, getTheatreById };
