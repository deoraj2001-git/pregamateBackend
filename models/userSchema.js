const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

})

const User=new mongoose.model("USER",userSchema);
module.exports=User;