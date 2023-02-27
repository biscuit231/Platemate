const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      trim: true
    },
    available: {
      type: Boolean,
      required: true,
      trim: true
    },
    type: {
      type: String,
      required: true,
      trim: true
    },
    img: {
      type: String,
      trim: true
    }
    // restaurant: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Restaurant'
    //   }
    // ]
  }
);

const Item = model('Item', itemSchema);

module.exports = Item;
