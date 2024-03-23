const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/product.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from node api server updated");
});

// API to get all current post
app.post("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API to get post by ID
app.post("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API to create new post
app.post("/api/create-post", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://Admin:aj&q3ha12A!@startupviet-cluster.bazupph.mongodb.net/Node-API?retryWrites=true&w=majority&appName=startupviet-cluster"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database fail!");
  });
