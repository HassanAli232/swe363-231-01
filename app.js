const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware to serve static files (like your HTML pages)
app.use(express.static("./"));

// Define your routes
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});

app.get("/home", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname) });
});

app.get("/AI", (req, res) => {
  res.sendFile("AI.html", { root: path.join(__dirname) });
});

app.get("/ML", (req, res) => {
  res.sendFile("ML.html", { root: path.join(__dirname) });
});

app.get("/form", (req, res) => {
  res.sendFile("form.html", { root: path.join(__dirname) });
});

app.get("/ttt", (req, res) => {
  res.sendFile("ttt.html", { root: path.join(__dirname) });
});

app.get("/index-ar", (req, res) => {
  res.sendFile("index-ar.html", { root: path.join(__dirname) });
});

app.get("/contactInfo", (req, res) => {
  res.sendFile("contactInfo.html", { root: path.join(__dirname) });
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).sendFile("not-found.html", { root: path.join(__dirname) });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
