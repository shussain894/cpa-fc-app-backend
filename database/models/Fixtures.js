const mongoose = require('mongoose')

const FixturesSchema = new mongoose.Schema({
  group: { type: String, required: true },
  opponent: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  confirmed: { type: Array, default: [] },
  result: { type: String }
});

const Fixtures = mongoose.model("Fixture", FixturesSchema);

module.exports = Fixtures;
