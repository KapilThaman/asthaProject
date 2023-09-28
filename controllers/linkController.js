const LinkValue = require("../models/link");

//Post A LINK
const addLinks = async (req, res) => {
  const data = req.body;

  console.log(data,"links data kya aa ra hai ")

  try {
    const links = await LinkValue.create({
      link: data.link,
      loggedinUser: data.loggedinUser,
    });
    return res.status(201).json({
      message: "Link Added Succesfully",
      data: links,
    });
  } catch (error) {
    res.status(400).json({
      message: "Link could not be added sorry",
      error: error,
    });
  }
};

//GET ALL THE LINKS
const getAllLinks = async (req, res) => {
  try {
    const allLinks = await LinkValue.find();
    res.status(200).json({
      message: "GOT ALL THE LINKS!",
      data: allLinks,
    });
  } catch (error) {
    res.status(400).json({
      message: "No Links Available!",
      error: error,
    });
  }
};

//Delete Specific Link

const DeleteSpecLink = async (req,res)=>{
    const data = req.params.id;
    
    try {
       
        const deletedLink = await LinkValue.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message:"deleted Successfully",
            deletedLink:deletedLink
        })
    } catch (error) {
        res.status(400).json({
            message:"deleting failed",
            error:error
        })
    }
     

}

//Update Specific Link

const UpdateSpecLink = async (req,res)=>{
  console.log("calling update");
    
    const update = req.body;
    console.log(update,"update kya aa");
    try {
        const updatedLink = await LinkValue.findByIdAndUpdate(req.params.id,update,{new:true});
        res.status(200).json({
            message:"updated Successfully",
            updatedLink:updatedLink
        })
    } catch (error) {
        res.status(400).json({
            message:"updating failed",
            error:error
        })
    }
}

module.exports = { addLinks,getAllLinks,DeleteSpecLink,UpdateSpecLink };
