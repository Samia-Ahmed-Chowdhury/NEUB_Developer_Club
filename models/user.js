const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
    pic:{
     type:String,
     default:"https://api.cloudinary.com/v1_1/samweb/image/upload/v1586197723/noimage_d4ipmd.png"
    },

 
})

mongoose.model("User",userSchema)