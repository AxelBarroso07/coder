const productManager = require('./productManagerSingleton.js')

const getProductsApplication = ()=> {
    const products = productManager.getProductById()
    return products
}

const getProductsByIdApplication = (id)=> {
    const products = productManager.getProductById(id)
    return products
}

const addProductApplication = (product) => {
    return productManager.addProduct(product)
}

const updateProductApplication = (id, product) => {
    return productManager.updateProduct(id, product)
}

const deleteProductApplication = (id)=> {
    return productManager.deleteProduct(id)
}

module.exports = {
    getProductsApplication,
    getProductsByIdApplication,
    addProductApplication,
    updateProductApplication,
    deleteProductApplication
}