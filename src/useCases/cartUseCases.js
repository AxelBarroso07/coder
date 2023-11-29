const { createCartApplication, getProductsByCartIdApplication,  addProductsToCartApplication} = require('../application/cartsApplication')

const createCart = (cart) => {
    return createCartApplication(cart)
}


const getProductsByCartId = (cartId) => {
    const { products } = getProductsByCartIdApplication(cartId)
    return products
}

const addProductsToCart = (cid, pid, quantity) => {
    return addProductsToCartApplication(cid, pid, quantity)
}   

module.exports = {
    createCart,
    getProductsByCartId,
    addProductsToCart
}