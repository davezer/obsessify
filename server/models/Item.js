const { Schema } = require('mongoose');
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
    username: {
      type: String,
      required: true
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

module.exports = itemSchema;