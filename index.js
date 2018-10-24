const express = require('express');
const app= express();

var mongoose = require('mongoose');
const config= require('./config/database');
const path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err)=>{
   if(err)
    console.log("Cannot connect to db");
    else
    console.log("Connected to db"+config.db);
});
app.use(express.static(__dirname+'/client/dist/client'));

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/client/dist/client/index.html'));
})

app.listen(3000 ,()=>{
    console.log("listening to 3000");
});