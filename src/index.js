const express = require('express')
const app = express()
//const cartRouter = require('./routes/cartRouter')
const productRouter = require('./routes/productRouter')
const cartRoutes = require('./routes/cartRouter')


/**
 * Middlewares
 */
app.use(express.json())
app.use(productRouter())
app.use(cartRoutes())


app.listen(8080, ()=> {
    console.log('Server in port 8080')
})


