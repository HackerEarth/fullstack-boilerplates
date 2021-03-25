const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ status: "backend is up and running" });
});

module.exports = app;
