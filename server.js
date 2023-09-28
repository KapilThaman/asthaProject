const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const mongoURl = 'mongodb+srv://root:root@cluster0.0w18s6p.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURl,(error)=>{
    if(!error){
        console.log("database connected");
    }
    else{
        console.log(error);
    }
})



app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use("/website",require("./routes/allroutes"));



app.get("/",(req,res)=>{
    res.send("Hello from server");
    });

app.listen(port,()=>{
    console.log("Server is running on port number: "+port)
})

