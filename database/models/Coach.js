import { Schema, model } from 'mongoose';

const CoachSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  title: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: String, required: true }
});

CoachSchema.statics.signup = async function(email, password, title, name, number) {

  const exists = await this.findOne({email})

  if (exists) {
    
    throw Error('Email already in use')
  }

  const coach = await this.create({email, password, title, name, number})
  return coach
};

const Coach = model("Coach", CoachSchema);

export default Coach;