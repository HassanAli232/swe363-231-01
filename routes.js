const express = require("express");
const path = require("path");
const router = express.Router();

// Define your routes
router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});

router.get("/home", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});

router.get("/AI", (req, res) => {
  res.sendFile("AI.html", { root: path.join(__dirname) });
});

router.get("/ML", (req, res) => {
  res.sendFile("ML.html", { root: path.join(__dirname) });
});

router.get("/form", (req, res) => {
  res.sendFile("form.html", { root: path.join(__dirname) });
});

router.get("/ttt", (req, res) => {
  res.sendFile("ttt.html", { root: path.join(__dirname) });
});

router.get("/index-ar", (req, res) => {
  res.sendFile("index-ar.html", { root: path.join(__dirname) });
});

router.get("/contactInfo", (req, res) => {
  res.sendFile("contactInfo.html", { root: path.join(__dirname) });
});

// Export the router
module.exports = router;
