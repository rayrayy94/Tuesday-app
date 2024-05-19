const mongoose = require('mongoose');

const ticketsSchema = new mongoose.Schema({
  ticketName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  hoursLogged: {
    type: Number,
  },
  ticketStatus: {
    type: String,
    default: 'todo',
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  comments: [
    {
      userName: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],
});

const Tickets = new mongoose.model('tickets', ticketsSchema);
module.exports = Tickets;
