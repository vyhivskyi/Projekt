const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Opinion = mongoose.model('Opinion', opinionSchema);

module.exports = Opinion;
