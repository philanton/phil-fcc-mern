const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const Schema = mongoose.Schema;

const shortenerSchema = new Schema({
  _id: {
    type: String,
    default: () => nanoid(8)
  },
  url: {
    type: String,
    required: true
  }
});

const Shortener = mongoose.model('Shortener', shortenerSchema);

module.exports = Shortener;
