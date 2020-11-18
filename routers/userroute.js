const { Router } = require('express');
const express=require('express');
const route=express.Router();
const usersymSchema=require("../models/users");
 
route.get('/',(req,res)=>{
    res.render("knowdoctor");
  
})
route.get("/showusers",(req,res)=>{
   usersymSchema.find().then((data)=>{
      console.log(data);
         
      res.json(data);
      res.render("users",{data:{name:data}});
    })
})
// route.get("/showspecificusers",(req,res)=>{
//   usersymSchema.find({email:'saran.17cs@kct.ac.in'}).then((data)=>{
//      console.log(data);
//      res.render("users",{data:{name:data}});
//    })
// })
//5f9a64c999fc5b37588b3497
route.delete("/:id",async (req,res)=>{
  try{
  const removed=await usersymSchema.deleteOne({_id:req.params.id});
  console.log(removed);
  res.json(removed);
  }
  catch(err){
    res.json({message:err});
  }
  
})
route.patch("/:id",async (req,res)=>{
  try{
  const updated=await usersymSchema.updateOne({_id:req.params.id},{$set:{name:req.body.name}});
  res.json(updated);
  }
  catch(err){
    res.json({message:err});
  }
  
})
route.put("/:id",async (req,res)=>{
  try{
  const updated=await usersymSchema.update({_id:req.params.id},{$set:{name:req.body.name}});
  res.json(updated);
  }
  catch(err){
    res.json({message:err});
  }
  
})
route.post('/',(req,res)=>{
 // console.log("req.body",req.body)
    const newuser=new usersymSchema({
      name:req.body.name,
      symptom:req.body.symptoms,
      doctor_name:req.body.drname,
      time:req.body.time,
      email:req.body.email,
      dob:req.body.doc,
      gender:req.body.gender,
    })
    newuser.save().then((data)=>{
      console.log(data);
      console.log("Data Saved");
      res.redirect("/user/showusers");
    }).catch((err)=>{
      console.log(err);
    })
})

 
module.exports=route;