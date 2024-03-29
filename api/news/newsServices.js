const News = require("../../models/news.model");
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");

exports.getAllNews = async () => {
  try {
    const newsList = await News.find({});
    return newsList;
  } catch (error) {
    throw error;
  }
};

exports.getNewsById = async (id) => {
  try {
    const news = await News.findById(id);
    return news;
  } catch (error) {
    throw error;
  }
};

exports.addNews = async (newsData) => {
  try {
    const news = await News.create(newsData);
    return news;
  } catch (error) {
    throw error;
  }
};

exports.updateNewsById = async function (newsId, updateData) {
  const updatedNews = await News.findByIdAndUpdate(newsId, updateData, {
    new: true,
  });
  if (!updatedNews) {
    throw new Error("News not found");
  }
  return updatedNews;
};

exports.deleteNewsById = async (id) => {
  try {
    const result = await News.findByIdAndDelete(id);
    return result;
  } catch (error) {
    throw error;
  }
};

// Configure GridFS storage
const storage = new GridFsStorage({
  url: "mongodb+srv://Admin:aj&q3ha12A!@startupviet-cluster.bazupph.mongodb.net/startupviet-data?retryWrites=true&w=majority&appName=startupviet-cluster",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

// Export the service function to handle file upload
exports.uploadFile = (req, res) => {
  upload.single("file")(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "File uploaded successfully" });
  });
};
