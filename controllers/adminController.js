const { adminroles } = require("../src/constants/roles");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
//Register A USER

const addAdminPosts =  async (req, res) => {
    const data = req.body;
    console.log(data, "data");
  
    try {
      const userfound = await User.findOne({ email: data.email });
  
      if (userfound) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
      const newUser = await User.create({
        name: data.name,
        email: data.email,
        password: data.password,
        role:adminroles
         
      });
      return res.status(201).json({
        id: newUser._id,
        message: "User Successfully Created",
        newUser: newUser,
        role:adminroles
        
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error Occured while creating user",
      });
    }
  };






//LOGIN ADMIN

const loginADMIN = async (req,res)=>{
   
    const data = req.body;
    console.log(data,"data");

    const user = await User.findOne({email:data.email});

    if((user) && user.password == data.password ){
        res.status(200).json({
            message:"ADMIN successfully logged in!",
            data:user,
            Token:generateToken(user._id)

        })
        
    }
    
    else{
        res.status(400).json({
            message:"Invalid Credantials!"
        })
    }
    
}




const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);

};

module.exports = { loginADMIN,addAdminPosts };