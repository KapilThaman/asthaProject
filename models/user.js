const mongoose = require("mongoose")

const userScheme = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:[],
        required:true
    }
   
},{
    timestamps:true
})
const User = mongoose.model('User', userScheme);

module.exports = User;