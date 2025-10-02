const path = require('path')

const getProducts = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "product.html"))
}

const getProductsById = (req, res) => {
    res.end(`Fetching product with ID: ${req.params.id}`)
}

const addProduct = (req, res) => {
    // res.end('Adding a new product')
    const data = req.body
    console.log(data)
    res.json({ value: data.productName })
}
module.exports = { getProducts, getProductsById, addProduct }