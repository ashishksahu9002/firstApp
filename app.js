const express = require("express")
const mongoose = require("mongoose")

const app = express()


app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))


const url = ""
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:true,
  useCreateIndex:true
})
.then(() => {
  console.log("MongoDB Connected !!!!!")
}).catch(err => console.log(err))


const exampleRoute = require('./route/exampleRoute')
const studentRoute = require('./route/studentRoute')

app.use('/',exampleRoute)
app.use('/student', studentRoute)

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
