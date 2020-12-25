const Student = require('../models/studentModel')

const addStudent = (req,res)=>{
    let student = new Student({
        name:req.body.name,
        email:req.body.email,
        dob:req.body.dob,
        collegeID:req.body.collegeID,
        collegeName:req.body.collegeName
    })

    student.save((err,saved)=>{
        if(err){
            return res.status(400).json({
                message:"failed to add data",
                err
            })
        }
        else{
            return res.status(200).json({
                message:"Data uploaded",
                saved
            })
        }
    })
}

module.exports = addStudent