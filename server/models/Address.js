const { Schema, model } = require('mongoose');

const addressSchema = new Schema(
  {
    location: {
      type: String
    },
    classes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Address'
        }
      ]
  }
);

const Address = model('Address', addressSchema);

module.exports = Address;