import { Schema, model } from 'mongoose';

const FixturesSchema = new Schema({
  group: { type: String, required: true },
  opponent: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true },
  confirmed: { type: Array, default: [] },
  result: { type: String }
});

const Fixtures = model("Fixture", FixturesSchema);

export default Fixtures;
