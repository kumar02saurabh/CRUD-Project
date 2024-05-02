const User = require('../models/user.model.js')


exports.home =(req,res)=>{
    res.send('Hello World!');
}

exports.createUser =async(req,res)=>{
    //extract Info

    try {
        const {name,email}=req.body

        if(!name||!email){
            throw new Error("Name and Email is required")
        }
        const userExist = User.findOne({email})
        if (userExist){
            throw new Error("user allready exist")
        }

        const user = await User.create({
            name,email
        })

        res.status(201).json({
            success:true,
            message:" User Created Successfully",
            user
        })


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message,
        
        })
        
    }
}

exports.getUsers = async(req,req)=>{
    try {
      const users=  await User.find({})
      res.status(200).json({
        sucess: true,
        users
      })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message,
        
        })
    }
}

exports.deleteUsers=async(req,res)=>{
    try {
        const userId=req.params.id
        await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:"Users Deleted Successfully"

        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message,
        
        })
    }
}

exports.editUser=async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.id,req.body)
        res.status(200).json({
            success: true,
            message:"users Update Successfully "


        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message: error.message,
        
        })
    }
}