const { Schema } = require("mongoose");

const TicketSchema = new Schema({
  airline: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = TicketSchema;