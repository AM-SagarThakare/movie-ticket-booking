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
    theatre: [{
      theatre_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Theatre"
      },
      "time": [String]
    }],
    displayImg: {
      type: String,
    },
    coverImg: String
  },
  {
    timestamp: true,
  }
);

movieSchema.plugin(private)

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
