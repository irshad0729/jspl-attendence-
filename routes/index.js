// Require express
const express = require("express");

// acquire Router function 
const router = express.Router();
console.log("router loaded");

// Require home controller
const homeController = require("../controllers/home_controller");

// Require controller for create project 
const createController = require("../controllers/create_project_controller");

// Require controller for delete project 
const deleteController = require("../controllers/delete_project_controller");

// access home route
router.get("/", homeController.home);

// access create project list route
router.post("/create-project-list", createController.create);

// access delete project list route
router.get("/delete-project", deleteController.delete);

// use futher route from projectdetials 
router.use("/projectdetails", require("./projectdetails"));

// export router
module.exports = router;
