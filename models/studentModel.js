const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({    
    name:{
        type:String,
        maxlength:50,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true
    },
    dob:{
        type:Date
    },
    collegeID:{
        type:String
    },
    collegeName:{
        type:String
    }
})

const Student = mongoose.model('Student',studentSchema)

module.exports = Student