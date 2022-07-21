// require project list schema 
const ProjectList = require("../models/projectList");

// Rendering the project details on page

module.exports.home = function (req, res) {
  //   console.log("contents of project list", ProjectList);
  ProjectList.find({}, function (err, projectList) {
    if (err) {
      console.log("Fetching error in Database");
      return;
    }
    return res.render("home", {
      title: "Issue Tracker",
      headline: "ISSUE TRACKER APP",
      project_list: projectList,
    });
  }).sort("-createdAt"); // used to sort project list based on creation date
};
