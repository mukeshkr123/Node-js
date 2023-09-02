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
    products.push(this); // Add the current product instance to the products array
  }

  // Static method to fetch all products (no need to create an instance)
  static fetchAll() {
    return products; // Return the array of all products
  }
};
