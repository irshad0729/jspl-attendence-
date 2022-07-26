//  required projectDetails schema
const ProjectList = require("../models/projectList");

// Inserting project data into database
module.exports.create = function (req, res) {
  ProjectList.create(
    {
      ename: req.body.ename,
      ecode: req.body.ecode,
      department: req.body.department,
      shift: req.body.shift,
      date: req.body.date,
    },
    function (err) {
      if (err) {
        console.log("error :", err);
      }
      return res.redirect("back");
    }
  );
};
