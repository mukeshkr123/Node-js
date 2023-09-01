const express = require("express");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const path = require("path");

const app = express();

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/admin", adminRouter);
app.use("/shop", shopRouter);

// Default 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
});

// Start the server
app.listen(8000, () => {
  console.log("Server is up and running on port 8000");
});
