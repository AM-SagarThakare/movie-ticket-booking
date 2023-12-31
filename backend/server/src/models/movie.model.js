const mongoose = require("mongoose");
const { private } = require("./plugins");


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
    },
    coverImg : String
  },
  {
    timestamp: true,
  }
);

movieSchema.plugin(private)

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
