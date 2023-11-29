const {getProductsApplication, getProductsByIdApplication, addProductApplication, updateProductApplication, deleteProductApplication } = require('../application/productsApplication')


/**
 * Retorna todos los productos
 */
const getProducts = () => {
    return getProductsApplication()
}

const getProductsByLimit = (limit) => {
    const products = getProductsApplication()
    
    const newArrayOfProducts = []

    if(limit < 0) {
        return {
            error : {
                message : "El limite es inferior a 1"
            }
        }
    }

    if(limit > products.length) {
        return {
            error : {
                message : "El limite ha excedido la cantidad de productos"
            }
        }
    }

    products.forEach((product, index) => {
        if(index < limit) {
            newArrayOfProducts.push(product)
        }
    });

    return newArrayOfProducts

}


const getProductById = (id) => {
    const product = getProductsByIdApplication(id)

    if(!product) {
        return {
            error : {
                message : "El producto no existe."
            }
        }
    } else {
        return product
    }
}

const addProduct = (product) => {
    return addProductApplication(product)
}

const updateProduct = (id, product)  => {
    return updateProductApplication(id, product)
}

const deleteProduct = (id)=> {
    return deleteProductApplication(id)
}

module.exports = {
    getProducts,
    getProductById,
    getProductsByLimit,
    addProduct,
    updateProduct,
    deleteProduct
}