const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
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
  img: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;