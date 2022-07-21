// required project list schema
const ProjectList = require("../models/projectList");

// delete project data from database
module.exports.delete = function (req, res) {
  let projectId = req.query.id;
  ProjectList.findByIdAndDelete(projectId, function (err) {
    if (err) {
      console.log("Error in Deleting object from DB");
      return;
    }
    return res.redirect("back");
  });
};
