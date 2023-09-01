const express = require("express");
const shopRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path");
const { products } = require("./admin");

shopRouter.get("/", (req, res) => {
  console.log(products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

shopRouter.post("/", (req, res) => {
  res.json({ message: "Product added successfully" });
});

module.exports = shopRouter;
