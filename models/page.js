const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  h1: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true
  }
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;