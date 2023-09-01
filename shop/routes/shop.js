const express = require("express");
const shopRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

shopRouter.get("/shop", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

shopRouter.post("/", (req, res) => {
  res.json({ message: "Product added successfully" });
});

module.exports = shopRouter;
