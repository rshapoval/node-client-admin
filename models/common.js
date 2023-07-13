const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const navSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const commonSchema = new Schema({
  logo: {
    type: String,
    required: true
  },
  nav: [navSchema]
});

const Common = mongoose.model('Common', commonSchema);

module.exports = Common;