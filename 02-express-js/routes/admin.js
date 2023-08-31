const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.json("Admin");
});

module.exports = adminRouter;
