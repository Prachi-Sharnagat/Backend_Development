//  const express = require('express');
//   // use to import express
// const app = express();

// app.listen(3000, ()=>{
//     console.log("App is running ");
// })

const express = require('express');
// import express from 'express' //module js // type:'module'
const app = express();
// load cconfi from env
require('dotenv').config();


// const PORT = process.env.port(); // to get port from env 
// but if not comming then we can to 

const PORT = process.env.PORT || 4000 // it will take PORT = 4000

// data parse without parser gives error 
// middleware hele to parse json request body

app.use(express.json());

// import routes for TODO API 
const todoRoutes = require('./routes/todo');

// mou=unt the todo apis
app.use('/api/v1', todoRoutes);    

app.listen(PORT ,()=>{
  console.log(`Server Started Successfully at ${PORT}`)
});

// best practice to write all required in top

// connect to the database
const dbconnect = require("./config/database");
dbconnect();

// default route 
app.get("/", (req,res)=>{
  res.send(`<h1> THIS IS HOMEPAGE BABY </h1>`);
})