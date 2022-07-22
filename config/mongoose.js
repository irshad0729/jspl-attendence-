// const dotenv = require("../dotenv").config();
const express = require("express");

// Require moongoose library

const mongoose = require("mongoose");

// provide the path of the database on mongodb atlas
const DB =
  "mongodb+srv://irshad:root@cluster0.l9zls.mongodb.net/bugtrackdb?retryWrites=true&w=majority";

// Established the connection to database

mongoose
  .connect(DB
  //   ,{
  //   useNewUrlParser: true,
  //   useCreateIndex:true,
  //   useUnifiedTopology:true,
  //   useFindAndModify:false
  // }
  )
  .then(() => {
    console.log("Mongo Atlas server connected ");
  })
  .catch((err) => {
    console.log("error", err);
  });



// Established the connection to database
// mongoose.connect("mongodb://localhost/issue_track_db");

// const db = mongoose.connection;

// // display message upon error in connecting db
// db.on("error", console.error.bind(console, "error in connecting to db"));

// // display message upon successfull connection
// db.once("open", function () {
//   console.log("Successfully connected to the database");
// });
