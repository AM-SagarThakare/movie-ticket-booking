const mongoose = require("mongoose");
const {private} = require('./plugins')

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

theatreSchema.plugin(private)


const Theatre = mongoose.model("Theatre", theatreSchema);

module.exports = Theatre;
