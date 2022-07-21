//  required projectDetails schema
const ProjectList = require("../models/projectList");

// Inserting project data into database 
module.exports.create = function (req, res) {
  ProjectList.create(
    {
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    },
    function (err) {
      if (err) {
        console.log("error :", err);
      }
      return res.redirect("back");
    }
  );
};
