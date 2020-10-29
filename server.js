const http=require('http');
const express = require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const ejs=require('ejs');

const port = process.env.PORT || 3000



mongoose.connect('mongodb+srv://hacker:JMSqY0vocLchCxqo@test.dajmv.mongodb.net/OPD_USERS?retryWrites=true&w=majority',{useNewUrlParser: true,
useUnifiedTopology: true,useCreateIndex:true},()=>{
  console.log("MongoDB Connected")
})


app.set('view engine','ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());





app.use("/user",require("./routers/userroute"));









const server=http.createServer(app);
server.listen(port,()=>{
  console.log(`Server Running at ${port}`);
})