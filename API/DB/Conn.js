const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/tuesday')
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(e => {
    console.log(e);
  });
