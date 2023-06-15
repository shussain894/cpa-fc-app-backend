import { Schema, model } from 'mongoose';

const ChildCoachSchema = new Schema({
  child_id: { type: String, required: true},
  coach_id: { type: String, required: true}
});

const ChildCoach = model("ChildCoach", ChildCoachSchema);

export default ChildCoach;