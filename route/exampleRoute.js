const express = require('express')

const route = express.Router()

const method = require('../controller/example')

route.get('/',method)

module.exports = route