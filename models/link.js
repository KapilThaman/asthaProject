const mongoose = require("mongoose")

const linkSchema = mongoose.Schema({
    link:{
        type:String,
        required:true
    },
    loggedinUser:{
        type:String,
        required:true
    }

},{
    timestamps:true
})
const LinkValue = mongoose.model('LinkValue', linkSchema);

module.exports = LinkValue;