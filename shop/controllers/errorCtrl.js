exports.get404Page = (req, res) => {
  const path = req.path;
  const pageTitle = "Page Not Found";
  res.render("404", { path, pageTitle });
};
