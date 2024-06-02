const express = require('express');
const cors = require('cors');
require('./DB/Conn');
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
const PORT = 8080;

// -------- TICKET SCHEMA CRUD START --------
const Ticket = require('./Model/Tickets');

// POST TICKET
app.post('/create-ticket', (req, res) => {
  try {
    let createTicket = new Ticket(req.body);
    createTicket
      .save()
      .then(() => {
        res.status(200).send(createTicket);
      })
      .catch(e => res.status(404).send(e));
  } catch {
    e => {
      res.status(500).send(e);
    };
  }
});

// GET TICKET
app.get('/get-ticket', async (req, res) => {
  try {
    let getTicket = await Ticket.find();
    res.status(200).send(getTicket);
  } catch {
    e => {
      res.status(500).send(e);
    };
  }
});

// GET TICKET BY ID
app.get('/get-ticket/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    let getTicket = await Ticket.findById(_id);
    res.status(200).send(getTicket);
  } catch {
    e => {
      res.status(500).send(e);
    };
  }
});

// UPDATE TICKET
app.patch('/update-ticket/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let updateTicket = await Ticket.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(updateTicket);
  } catch {
    res.status(500).send(e);
  }
});

// DELETE TICKET
app.delete('/delete-ticket/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let deleteTicket = await Ticket.deleteOne({ _id: id });
    res.status(200).send(deleteTicket);
  } catch {
    e => {
      res.status(500).send(e);
    };
  }
});

// -------- TICKET SCHEMA CRUD END --------

// PORT
app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
