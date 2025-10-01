const express = require('express')
const route = express.Router()
const cartController = require('../controller/cartController')


route.get('/:userId', cartController.getCartById)

route.post('/:userId', cartController.addCartById)

module.exports = route