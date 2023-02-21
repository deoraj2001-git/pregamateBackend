const express=require("express");
const mongoose=require("mongoose");
const {json,urlencoded,Router}=require("express");
const route=express.Router();
route.use(express.json());
route.use(urlencoded({extended:true}));

// DB Connection
require("../db/conn");

// User Schema
const User=require("../models/userSchema");
const appData=require("../models/appData");
const doctor=require("../models/doctorSchema");

route.get("/",(req,res)=>{
        res.send("hello world");
})