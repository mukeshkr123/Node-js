// Import the Product model
const Product = require("../models/product");

// Controller function to render the "Add Product" page
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

// Controller function to handle the submission of a new product
exports.postAddProduct = (req, res, next) => {
  // Create a new product instance with the title from the request body
  const product = new Product(req.body.title);

  // Save the product to the data store (e.g., an array)
  product.save();

  // Redirect to the main shop page after adding the product
  res.redirect("/");
};

// Controller function to render the "Shop" page and display a list of products
exports.getProducts = (req, res, next) => {
  // Retrieve all products from the data store
  Product.fetchAll((products) => {
    // Render the "Shop" page with the list of products and other data
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
