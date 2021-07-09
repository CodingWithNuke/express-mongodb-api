const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});

module.exports = model("Post", PostSchema);