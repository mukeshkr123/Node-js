const express = require("express");
const adminRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

// Welcome message for admin panel
adminRouter.get("/admin/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

module.exports = adminRouter;
