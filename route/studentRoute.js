const express = require("express")

const router = express.Router()

const addStudent = require('../controller/studentController')

router.post('/addStudent', addStudent)

module.exports = router