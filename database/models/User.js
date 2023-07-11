import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  title: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: String, required: true },
  accountType: { type: String, default: "user" }
});

UserSchema.statics.signup = async function(email, password, title, name, number) {

  const exists = await this.findOne({email})

  if (exists) {
    
    throw Error('Email is already in use')
  }

  const user = await this.create({email, password, title, name, number})
  return user
};

const User = model("User", UserSchema);

export default User;