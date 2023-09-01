const express = require("express");
const { adminRouter } = require("./routes/admin");
const shopRouter = require("./routes/shop");
const path = require("path");
const rootDir = require("./utils/path");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware for static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/admin", adminRouter);
app.use(shopRouter);

// Default 404 handler
app.use((req, res, next) => {
  res.status(404).render("404");
});

// Start the server
app.listen(8000, () => {
  console.log("Server is up and running on port 8000");
});
