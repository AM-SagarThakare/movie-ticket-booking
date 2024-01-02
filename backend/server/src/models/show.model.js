const mongoose = require("mongoose");
const { private } = require("./plugins");

const showSchema = mongoose.Schema(
  {
    movie_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    theatre_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    ticket: Number,
    bookedSeats: [{ type: Number }],
    temporaryBlockedSeats: [{ type: Number }],
  },
  {
    timestamp: true,
  }
);

showSchema.plugin(private);

const Show = mongoose.model("Show", showSchema);

module.exports = Show;
