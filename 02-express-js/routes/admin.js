const express = require("express");
const adminRouter = express.Router();

// Welcome message for admin panel
adminRouter.get("/", (req, res) => {
  res.json({ message: "Welcome to the admin panel" });
});

module.exports = adminRouter;
