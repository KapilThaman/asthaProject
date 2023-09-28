const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { adminroles, userroles } = require("../src/constants/roles");



//Register A USER
const addPosts =  async (req, res) => {
  const data = req.body;
  console.log(data, "data");
  console.log("THIS IS USER");   

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
      role:userroles
       
    });
    return res.status(201).json({
      id: newUser._id,
      message: "User Successfully Created",
      newUser: newUser,
      role:userroles
      
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error Occured while creating user",
    });
  }
};

//GET ALL USERS
const getposts = async (req, res) => {
  const data = await User.find();
  res.status(201).json({
    message: "done",
    data: data,
  });
};

//LOGIN USER

const loginUSER = async (req,res)=>{
   
    const data = req.body;
    console.log(data,"data");

    const user = await User.findOne({email:data.email});
    
    
   


    if((user) && user.password == data.password ){
        res.status(200).json({
            message:"User successfully logged in!",
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

module.exports = { addPosts, getposts, loginUSER };
