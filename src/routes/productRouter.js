const express = require('express')
const { getProductsController,
    getProductsByIdController,
    addProductController,
    updateProductController,
    deleteProductsController
} = require('../controllers/productsControllers')

const router = express.Router()

const productRouter = () => {

    router.get('/api/products', getProductsController)
    router.get('/api/products/:id', getProductsByIdController)
    router.post('/api/products', addProductController)
    router.put('/api/products/:pid', updateProductController)
    router.delete('/api/products/:pid', deleteProductsController)

    return router

}

module.exports = productRouter