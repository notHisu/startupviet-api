const express = require("express");
const app = express();
const newsRoutes = require("./api/news/newsRoutes");

app.use(express.json());

// Define your routes and middleware here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", newsRoutes);

module.exports = app;
