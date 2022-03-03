const { Schema, model } = require('mongoose');
const itemSchema = require('./Item');

const collectionSchema = new Schema(
  {
    collectionName: {
      type: String,
      required: 'Please name your collection!',
      minlength: 1,
      maxlength: 280
    },
    category: {
        type: String,
        required: 'Please add a category',
        minlength: 1,
        maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    items: [itemSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

collectionSchema.virtual('itemCount').get(function() {
  return this.items.length;
});

const Collection = model('Collection', collectionSchema);

module.exports = Collection;