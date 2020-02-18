const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },

    destination: {
      type: String,
      required: true
    },

    date: {
      type: Date,
      required: true
    },
    returndate: {
      type: Date
    },

    triptype: {
      type: String
    },
    flight: {
      type: String
    },
    hotel: {
      type: String
    },
    notes: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
