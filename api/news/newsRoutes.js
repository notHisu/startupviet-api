const express = require("express");
const router = express.Router();
const newsController = require("./newsController");

router.get("/api/news/all", newsController.getAllNews);
router.get("/api/news/:id", newsController.getNewsById);
router.post("/api/news/add", newsController.addNews);
router.put("/api/news/update/:id", newsController.updateNewsById);
router.delete("/api/news/delete/:id", newsController.deleteNewsById);

module.exports = router;
