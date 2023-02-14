const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true
    },
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    classes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ]
  }
);

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
