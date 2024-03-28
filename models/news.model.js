const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
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

const News = mongoose.model("News", NewsSchema);

module.exports = News;
