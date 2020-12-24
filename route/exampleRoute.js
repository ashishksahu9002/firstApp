const express = require('express')

const route = express.Router()

const method = require('../container/example')

route.get('/',method)

module.exports = route