const mongoose =require("mongoose")

const userSchema =new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required '],
        trim :true,
        maxLength:[20,"Name less than 20 Chracter"]
    },
    email: {
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
})

module.exports= mongoose.model("User",userSchema)