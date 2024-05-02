const express =require('express')

const{home,createUser,getUsers,deleteUsers,editusers}= require("../controlles/userController.js")


const router= express.Router();

router.get("/",home)
router.post('/createUser',createUser)
router.get('/getusers',getUsers)
router.delete('/deleteUsers/:',deleteUsers)
router.put('/editusers/:id',editusers)

module.exports =router