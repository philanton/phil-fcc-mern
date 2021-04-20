const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(6)
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const userSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(12)
  },
  username: {
    type: String,
    required: true
  },
  log: {
    type: [exerciseSchema],
    default: []
  },
  count: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("User", userSchema, 'users');

module.exports = User;
