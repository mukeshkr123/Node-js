const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Create an empty array to store product objects
const products = [];

// Define a Product class
module.exports = class Product {
  // Constructor to initialize a product with a title
  constructor(title) {
    this.title = title; // Set the product's title
  }

  // Method to save the product to the products array
  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (error, fileContent) => {
      let products = [];
      if (!error) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  // Static method to fetch all products (no need to create an instance)
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
    return products; // Return the array of all products
  }
};
