const getProducts = (req, res) => {
    res.end("Fetching all products")
}

const getProductsById = (req, res) => {
    res.end(`Fetching product with ID: ${req.params.id}`)
}

const addProduct = (req, res) => {
    res.end('Adding a new product')
}
module.exports = { getProducts, getProductsById, addProduct }