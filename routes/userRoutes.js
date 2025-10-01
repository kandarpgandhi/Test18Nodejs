const express = require('express')
const route = express.Router()
const userController = require('../controller/userController')


route.get('/', userController.getAllUser)

route.post('/', userController.addUser)

route.get('/:id', userController.getUserById)


module.exports = route