const mongoose = require("mongoose");

const theatreSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    totalSeats: {
      type: Number,
      required: true,
    },
    bookedSeats: Number,
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamp: true,
  }
);

const Theatre = mongoose.model("Theatre", theatreSchema);

module.exports = Theatre;
