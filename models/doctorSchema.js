const mongoose=require("mongoose");

const doctorSchema=new mongoose.Schema({

})

const Doctor=new mongoose.model("DOCTOR",doctorSchema);
module.exports=Doctor;