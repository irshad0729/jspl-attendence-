// require project details schema
const ProjectDetail = require("../models/projectList");

module.exports.home = function (req, res) {
  // rendered the specific project Bugs/Issues list on web page
  ProjectDetail.find({}, function (err, projectdetails) {
    if (err) {
      console.log("Fetching error in Database");
      return;
    }
    return res.render("projectdetails", {
      title: "Jindal Steel and Power",
      headline: "ATTENDANCE SHEET",
      project_details: projectdetails,
      // project_id: projectId,
      // project_name: projectName,
      // project_desc: description,
      // project_author: author,
    });
  }).sort("-createdAt"); // used to sort bugs/issue list based on creation date
};
