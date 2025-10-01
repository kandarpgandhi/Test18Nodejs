const getAllUser = (req, res) => {
    res.end('Fetching all users')
}

const addUser = (req, res) => {
    res.end("Adding a new user")
}
const getUserById = (req, res) => {
    res.end(`Fetching user with ID: ${req.params.id}`)
}
module.exports = { getAllUser, addUser, getUserById }