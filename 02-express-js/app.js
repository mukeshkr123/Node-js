const express = require("express");
const adminRouter = require("./routes/shop");
const shopRouter = require("./routes/shop");

const app = express();

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/", shopRouter);
app.use("/", adminRouter);

// Start the server
app.listen(8000, () => {
  console.log("Server is up and running on port 8000");
});
