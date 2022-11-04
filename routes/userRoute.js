const express = require("express")
const userRoute=express.Router();
const user=require('../models/userModel')



userRoute.post("/add",async(req,res)=>{
    try{const newUser= new User(req.body);
    const newUser= new user(req,body)

    const result=await newUser.save();
    res.send(result)

})



catch(err){console.log(err);}})



userRoute.get('/',async (req, res)=>{
    try{
        const result = await User.find();
        res.send({user:result, msg:"all persons "})
}

catch(err){console.log(err);}})


userRoute.get('/:id',async (req, res)=>{
    try{
        const result = await User.findById(req.params.id);
        res.send({user:result, msg:"uder is selected by id "})
}

catch(err){console.log(err);}})


userRoute.delete('/delete/:id',async (req, res)=>{
    try{
        const result = await User.findByIdAndDelete(req.params.id);
        res.send({user:result, msg:"dlete is Done! "})
}
catch(err){console.log(err);}})

userRoute.put('/update/:id',async (req, res)=>{
    try{
        const result = await User.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
        res.send({user:result, msg:"update person"})
}
catch(err){console.log(err);}})



module.exports = userRoute; 

