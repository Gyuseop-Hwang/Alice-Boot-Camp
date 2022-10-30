const mongoose = require("mongoose");
const TicketSchema = require("./schemas/ticket");

exports.Ticket = mongoose.model("Ticket", TicketSchema);
