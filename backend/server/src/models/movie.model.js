const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    audio: [
      {
        type: String,
        required: true,
      },
    ],
    trailer: {
      type: String,
      required: true,
    },
    theatre: [{ type: mongoose.Schema.Types.ObjectId, ref: "Theatre" }],
    displayImg: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
