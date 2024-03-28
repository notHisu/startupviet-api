const newsService = require("./newsServices");

exports.getAllNews = async (req, res) => {
  try {
    const newsList = await newsService.getAllNews();
    res.status(200).json(newsList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await newsService.getNewsById(req.params.id);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addNews = async (req, res) => {
  try {
    const news = await newsService.addNews(req.body);
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateNewsById = async (req, res) => {
  try {
    const newsId = req.params.id;
    const updatedNews = await newsService.updateNewsById(newsId, req.body);
    res.status(200).json(updatedNews);
  } catch (error) {
    if (error.message === "News not found") {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

exports.deleteNewsById = async (req, res) => {
  try {
    const result = await newsService.deleteNewsById(req.params.id);
    res.status(200).json({ message: "News post deleted successfully", result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
