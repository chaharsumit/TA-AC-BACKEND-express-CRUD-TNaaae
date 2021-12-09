let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  age: Number,
  bio: String,
  hobbies: [String]
}, { timestamps: true });

let User = mongoose.model('User', userSchema);

module.exports = User;