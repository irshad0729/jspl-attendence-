// require project details schema
const ProjectDetail = require("../models/projectDetails");

// rendered the specific project Bugs/Issues list on web page
module.exports.home = function (req, res) {
  //   res.send("<h1>Home Page </h1><br> <h4>This is my first home page </h4>");
  // console.log("contents of project list", ProjectDetail);
  // Assigning query param into variables
  const projectId = req.query.id;
  const projectName = req.query.name;
  const description = req.query.description;
  const author = req.query.author;

// rendered the specific project Bugs/Issues list on web page
  ProjectDetail.find({ projectId: projectId }, function (err, projectdetails) {
    if (err) {
      console.log("Fetching error in Database");
      return;
    }
    return res.render("projectdetails", {
      title: "Issue Tracker",
      headline: "CREATE BUGS/ISSUE",
      project_details: projectdetails,
      project_id: projectId,
      project_name: projectName,
      project_desc: description,
      project_author: author,
    });
  }).sort("-createdAt"); // used to sort bugs/issue list based on creation date 
};
