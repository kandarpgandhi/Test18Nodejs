const express = require('express')
const app = express()

const userRouter = require('./routes/userRoutes')
const productRouter = require('./routes/productRoutes')
const cartRouter = require('./routes/cartRoutes')

app.use(express.static('public'))
app.use(express.json())
app.use('/api/users', userRouter)

app.use('/api/product', productRouter)

app.use('/api/cart', cartRouter)

app.listen(3000, () => {
    console.log("Server is running")
})