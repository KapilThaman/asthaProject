const User = require("../models/user");
let user= null;

const authroles = (permission)=>{
return async(req,res,next)=>{
const data = req.body;
user = await User.findOne({email:data.email});
console.log(permission[0]);
console.log(user.role[0]);

if(permission.includes(user.role[0])){
   
next();
}
else{
    return res.status(401).json({
        message:"Not an identified User !"
    })
}

}
}

module.exports = {authroles,user}