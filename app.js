const express = require("express")

const app = express()

const exampleRoute = require('./route/exampleRoute')

app.use('/',exampleRoute)

const PORT = 5000

app.listen(PORT,()=>{
    console.log('Server is running')
})