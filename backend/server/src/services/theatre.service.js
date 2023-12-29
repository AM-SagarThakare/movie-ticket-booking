const { Theatre } = require("../models");

const addTheatre = async (payload) => {
  return await Theatre.create(payload);
};

module.exports = { addTheatre };
