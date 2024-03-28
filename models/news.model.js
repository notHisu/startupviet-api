const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter post name"],
  },
  content: {
    type: String,
    required: [true, "Please enter psot content"],
  },
  likeAmounts: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
