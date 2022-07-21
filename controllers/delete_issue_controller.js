//  required projectDetails schema
const ProjectDetail = require("../models/projectDetails");

//Delete project issue from database
module.exports.delete = function (req, res) {
  let projectId = req.query.id;
  console.log(typeof req.query.id);
  ProjectDetail.findByIdAndDelete(projectId, function (err) {
    if (err) {
      console.log("Error in Deleting object from DB");
      return;
    }
    return res.redirect("back");
  });
};
