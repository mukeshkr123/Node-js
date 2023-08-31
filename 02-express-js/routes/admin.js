const express = require("express");
const adminRouter = express.Router();
const path = require("path");

// Welcome message for admin panel
adminRouter.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

module.exports = adminRouter;
