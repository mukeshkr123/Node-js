const express = require("express");
const shopRouter = express.Router();

shopRouter.get("/add-product", (req, res) => {
  res.json("Add product");
});

module.exports = shopRouter;
