const express = require("express");
const adminRouter = require("./routes/admin"); // Assuming you have separate files for admin and shop routes
const shopRouter = require("./routes/shop");

const app = express();

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/admin", adminRouter);
app.use("/add-product", shopRouter);

// Default 404 handler
app.use((req, res, next) => {
  res.status(404).json("Not Found");
});

// Start the server
app.listen(8000, () => {
  console.log("Server is up and running on port 8000");
});
