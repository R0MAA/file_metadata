"use strict";

const multer = require("multer");

// IMPORTANT: memoryStorage
const upload = multer({ storage: multer.memoryStorage() });

module.exports = function (app) {

  app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
    // FCC expects req.file to exist
    if (!req.file) {
      return res.json({ error: "No file uploaded" });
    }

    // FCC EXPECTS EXACT KEYS AND TYPES
    res.json({
      name: req.file.originalname, // NOT filename
      type: req.file.mimetype,
      size: req.file.size           // MUST be a number
    });
  });

};
