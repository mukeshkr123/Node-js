const express = require("express");
const adminRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

const products = [];

adminRouter.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

adminRouter.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.adminRouter = adminRouter;
exports.products = products;
