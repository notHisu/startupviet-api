const postsService = require("../services/postsService");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};
