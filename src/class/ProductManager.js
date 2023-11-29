const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.products = [];
    this.loadProducts();
  }

  loadProducts() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
  }

  saveProducts() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
  }

  addProduct(product) {
    this.products.push(product);
    this.saveProducts();
  }

  getProducts() {
    return this.products;
  }

  getProductById(productId) {
    return this.products.find(product => product.id === productId);
  }

  deleteProduct(productId) {
    const index = this.products.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveProducts();
    } else {
      return false
    }
  }

  updateProduct(productId, updatedProduct) {
    const product = this.getProductById(productId);
    if (product) {
      Object.assign(product, updatedProduct);
      this.saveProducts();
    }
  }
}

module.exports = ProductManager;
