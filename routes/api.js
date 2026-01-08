"use strict";

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

module.exports = function (app) {

  app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
    if (!req.file) {
      return res.json({ error: "No file uploaded" });
    }

    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    });
  });

};
