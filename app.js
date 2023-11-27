const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static("./"));

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Import the router
const mainRouter = require("./routes");

// Use the router
app.use("/", mainRouter);

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).sendFile("not-found.html", { root: path.join(__dirname) });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
