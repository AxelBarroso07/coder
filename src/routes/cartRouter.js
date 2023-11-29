const express = require('express')
const { createCartController, addProductToCartController, getProductsByCartIdController} = require('../controllers/cartController')

const router = express.Router()

const cartRoutes = () => {
    router.post('/api/cart/', createCartController)
    router.post('/api/cart/:cid/product/:pid', addProductToCartController)

    router.get('/api/cart/:cid', getProductsByCartIdController)

    return router
}

module.exports = cartRoutes