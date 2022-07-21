// require express 
const express = require("express");

// require router function 
const router = express.Router();

// require project details home controller
const projectdetailsController = require("../controllers/project_detail_home_controller");

// require create issue controller
const createIsssueController = require("../controllers/create_issue_controller");

// require delete issue controller
const deleteIssueController = require("../controllers/delete_issue_controller");

// require filter controller
const filterController = require("../controllers/filter_controller");

// route create/render bugs and issue page
router.get("/", projectdetailsController.home);

// access create issue route
router.post("/create-issue", createIsssueController.create);

// access delete issue route
router.get("/delete-issue", deleteIssueController.delete);

// access filter route
router.post("/filter", filterController.filter);

// export router
module.exports = router;
