const getCartById = (req, res) => {
    res.end(`Fetching cart for user with ID: ${req.params.userId}`)
}

const addCartById = (req, res) => {
    res.end(`Adding product to cart for user with ID: ${req.params.userId}`)
}
module.exports = { getCartById, addCartById }