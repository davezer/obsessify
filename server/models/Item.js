const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');


const itemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
      maxlength: 280
    },
    description: {
        type: String,
        required: true,
        maxlength: 280
    },
    comments: [commentSchema]
  },
  {
      toJSON: {
          getters: true
      }
  }
);

itemSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

const Item = model('Item', itemSchema);

module.exports = Item;