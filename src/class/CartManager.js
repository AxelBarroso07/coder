const fs = require('fs');

class CartManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.carts = [];
    this.loadCarts();
  }

  loadCarts() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      this.carts = JSON.parse(data);
    } catch (error) {
      this.carts = [];
    }
  }

  saveCart() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.carts, null, 2));
  }

  addCart(cart) {
    this.carts.push(cart);
    this.saveCart();
  }

  getCarts() {
    return this.carts;
  }

  getCartsById(cartId) {
    return this.carts.find(cart => cart.id === cartId);
  }

  deleteCart(cartId) {
    const index = this.carts.findIndex(cart => cart.id === cartId);
    if (index !== -1) {
      this.carts.splice(index, 1);
      this.saveCart();
    } else {
      return false
    }
  }

  updateCart(cartId, updatedCart) {
    const cart = this.getCartById(cartId);
    if (cart) {
      Object.assign(cart, updatedCart);
      this.saveCart();
    }
  }

  addProductsToCart(cartId, productId, quantity = 1) {
    const cart = this.getCartsById(cartId);
    
    if (cart) {
        const productIndex = cart.products.findIndex(product => product.id === productId);
        
        if (productIndex !== -1) {
            cart.products[productIndex].quantity = (cart.products[productIndex].quantity || 0) + quantity;
        } else {
            cart.products.push({ id: productId, quantity });
        }
        
        this.saveCart();
    }
}


}

module.exports = CartManager;
