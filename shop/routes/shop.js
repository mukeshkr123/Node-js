const express = require("express");
const shopRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path");
const { products } = require("./admin");

shopRouter.get("/", (req, res) => {
  res.render("shop", { prods: products, docTitle: "Shop " });
});

shopRouter.post("/", (req, res) => {
  res.json({ message: "Product added successfully" });
});

module.exports = shopRouter;
