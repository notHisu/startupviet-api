// postsService.js
const Post = require("../models/product.model");

exports.getAllPosts = async () => {
  return await Post.find({});
};

// Add other service methods similarly
