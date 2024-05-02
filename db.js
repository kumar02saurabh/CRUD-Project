const mongoose = require ('mongoose')
mongoose.connect("mongodb://localhost:27017/mydb")
const db=mongoose.connection 

db.on ("error ",()=>{
    console.log("Error while connecting to DB ");
});

db.once("open",()=>{
    console.log("Connected To DB");
})


