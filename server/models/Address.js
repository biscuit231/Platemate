const { Schema, model } = require('mongoose');

const addressSchema = new Schema(
  {
    location: {
      type: String
    },
    users: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ]
  }
);

const Address = model('Address', addressSchema);

module.exports = Address;