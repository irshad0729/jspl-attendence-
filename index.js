// Importing express module
const express = require("express");

// Establishing the port
const PORT = process.env.PORT ||8000;
const path = require("path");


// required mongoose library
const db = require("./config/mongoose");

// required project list schema
const ProjectList = require("./models/projectList");

// required project details schema
const ProjectDetail = require("./models/projectDetails");

// required express ejs layouts
const expressLayouts = require("express-ejs-layouts");

const app = express();
// app.use(expressLayouts);

// use parser
app.use(express.urlencoded());

// use static files by express
app.use(express.static("assets"));

// use express router
app.use("/", require("./routes/index"));

//tell express to use ejs as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Executing the server on given port number
app.listen(PORT, function (err) {
  if (err) {
    console.log("Error", err);
  }
  console.log(`My Server is connected to port ${PORT}`);
});
