const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const articleSchema = new Schema({
  __v: { type: Number, select: false },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  publish_time: { type: String, required: true },
}, { timestamps: true });

module.exports = model('Article', articleSchema);