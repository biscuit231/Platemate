const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    }
  }
);

const User = model('User', userSchema);

module.exports = User;
