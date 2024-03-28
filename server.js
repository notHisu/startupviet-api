const mongoose = require("mongoose");
const app = require("./app");
// const cors = require("cors");

// app.use(cors());

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    //"mongodb+srv://Admin:aj&q3ha12A!@startupviet-cluster.bazupph.mongodb.net/Node-API?retryWrites=true&w=majority&appName=startupviet-cluster"
    "mongodb+srv://Admin:aj&q3ha12A!@startupviet-cluster.bazupph.mongodb.net/startupviet-data?retryWrites=true&w=majority&appName=startupviet-cluster"
  )
  .then(() => {
    console.log("Connected to database!");

    // Start the server
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database fail!");
  });
