//
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter post Title'],
    },
    text: {
      type: String,
      required: [true, 'Please enter post Text'],
    },
    author: {
      type: String,
      required: [true, 'Please enter post Author'],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model('Post', PostSchema);
