//  required projectDetails schema 
const ProjectDetail = require("../models/projectDetails");

// Inserting project issue data into database 
module.exports.create = function (req, res) {
  console.log(req.body);
  ProjectDetail.create(
    {
      title: req.body.title,
      description: req.body.description,
      label: req.body.label,
      author: req.body.author,
      projectId: req.body.id,
    },
    function (err) {
      if (err) {
        console.log("error :", err);
      }
      return res.redirect("back");
    }
  );
};
