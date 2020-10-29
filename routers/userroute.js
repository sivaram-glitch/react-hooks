const express=require('express');
const route=express.Router();
const usersymSchema=require("../models/users");


route.get('/',(req,res)=>{
    res.render("knowdoctor");
  
})
route.get("/showusers",(req,res)=>{
   usersymSchema.find().then((data)=>{
      console.log(data);
      res.render("users",{data:{name:data}});
    })
})
route.post('/',(req,res)=>{
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