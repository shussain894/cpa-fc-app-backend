const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  title: { type: String, required: true },
  name: { type: String, required: true },
  number: { type: String, required: true },
  child: { type: Array, default: [] }
});

UserSchema.statics.signup = async function(email, password, title, name, number) {

  const exists = await this.findOne({email})

  if (exists) {
    
    throw Error('Email already in use')
  }

  const user = await this.create({email, password, title, name, number})
  return user
};

const User = mongoose.model("User", UserSchema);

module.exports = User;