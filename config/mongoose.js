// Require moongoose library
const mongoose = require("mongoose");

// Established the connection to database
mongoose.connect("mongodb://localhost/issue_track_db");


const db = mongoose.connection;

// display message upon error in connecting db
db.on("error", console.error.bind(console, "error in connecting to db"));

// display message upon successfull connection
db.once("open", function () {
  console.log("Successfully connected to the database");
});
