const express = require("express");
const shopRouter = express.Router();
const path = require("path");

shopRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

shopRouter.post("/", (req, res) => {
  res.json({ message: "Product added successfully" });
});

module.exports = shopRouter;
