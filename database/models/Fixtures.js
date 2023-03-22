const mongoose = require('mongoose')

const FixturesSchema = new mongoose.Schema({
  group: { type: String, required: true },
  opponent: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  confirmed: { type: Array, default: [] },
  result: { type: String }
});

module.exports = FixturesSchema;
