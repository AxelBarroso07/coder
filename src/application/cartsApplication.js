const cartManager = require('./cartManagerSingleton')

const createCartApplication = (cart) => {
    return cartManager.addCart(cart)
}

const getProductsByCartIdApplication = (cid)=> {
    return cartManager.getCartsById(cid)
}

const addProductsToCartApplication = (cid, pid, quantity) => {
    return cartManager.addProductsToCart(cid, pid, quantity)
}

module.exports = {
    createCartApplication,
    getProductsByCartIdApplication,
    addProductsToCartApplication
}