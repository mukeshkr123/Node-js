const express = require("express");
const shopRouter = express.Router();

// Display product form
shopRouter.get("/", (req, res) => {
  res.json({ message: "Display product form" });
});

// Add product (using POST request)
shopRouter.post("/", (req, res) => {
  // Logic to add the product
  res.json({ message: "Product added successfully" });
});

module.exports = shopRouter;
