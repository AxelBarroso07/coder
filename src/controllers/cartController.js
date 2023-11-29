
const { createCart, getProductsByCartId, addProductsToCart } = require("../useCases/cartUseCases")


const createCartController = (req, res) => {
    const { id, products } = req.body

    const cartValidated = {
        id,
        products
    }

    if (!products || !id || !Array.isArray(products)) {
        return res.status(400).json({ message: "No existe alguno de los siguientes campos : id o lista de productos" })
    } else {
        createCart(cartValidated)
    }

    return res.status(200).json({ message: "Carrito creado correctamente" })

}


const getProductsByCartIdController = (req, res) => {
    const cId = req.params.cid

    const cartProducts = getProductsByCartId(cId)

    return res.status(200).json({ data: cartProducts })


}

const addProductToCartController = (req, res) => {
    const cid = req.params.cid
    const pid = req.params.pid
    const quantity = req.body.quantity


    addProductsToCart(cid, pid, quantity)


    res.status(200).send({ message: "Carrito actualizado con exito", data: getProductsByCartId(cid) })


}

module.exports = {
    createCartController,
    getProductsByCartIdController,
    addProductToCartController
}