const fs = require("fs");
const path = require("path");

// Construct the path to the JSON data file
const dataPath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

class Product {
  constructor(title) {
    this.title = title;
  }

  // Save the product to the JSON file
  save() {
    // Use the constructor to access the static getAllProducts method
    this.constructor.getAllProducts((products) => {
      products.push(this);
      // Write the updated product list back to the JSON file
      fs.writeFile(dataPath, JSON.stringify(products), (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        }
      });
    });
  }

  // Fetch all products and pass them to a callback function
  static fetchAll(cb) {
    this.getAllProducts(cb);
  }

  // Read all products from the JSON file
  static getAllProducts(cb) {
    fs.readFile(dataPath, (err, fileContent) => {
      if (err) {
        console.error("Error reading file:", err);
        cb([]);
      } else {
        // Parse the JSON data and pass it to the callback
        cb(JSON.parse(fileContent));
      }
    });
  }
}

module.exports = Product;
