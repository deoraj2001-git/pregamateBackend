const express=require("express");
const mongoose=require("mongoose");
const app=express();

//DB Connection
require("./db/conn");

// Routes
app.use(require("./Router/route"));

const port=process.env.PORT || 5000;

app.listen(port,()=>{
        console.log(`Server running at ${port}`);
})