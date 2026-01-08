"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.static("public"));

// Routes
require("./routes/api")(app);

// Root serves the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // REQUIRED for FCC tests
