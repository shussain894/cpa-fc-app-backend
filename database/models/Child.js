import { Schema, model } from 'mongoose';

const ChildSchema = new Schema({
  name: { type: String, required: true, unique: true },
  dob: { type: String, required: true },
  address: { type: String, required: true },
  group: { type: String, required: true },
  school: { type: String, required: true },
  relationshipToChild: { type: String, required: true },
  userID: { type: String, required: true },
  nokName: { type: String, required: true },
  nokNumber: { type: String, required: true },
  doctorName: { type: String, required: true },
  surgeryName: { type: String, required: true },
  surgeryNumber: { type: String, required: true }
});

const Child = model("Child", ChildSchema);

export default Child;