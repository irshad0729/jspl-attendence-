// required project details schema
const ProjectDetail = require("../models/projectList");

// rendered page based on search by author,title & lable
module.exports.filter = function (req, res) {
  // Search based on combination of title and Lable
  if (req.body.ecode) {
    ProjectDetail.find(
      {
        ecode: req.body.ecode,
      },
      function (err, projectDetails) {
        if (err) {
          console.log("Fetching error in Database");
          return;
        }
        return res.render("projectdetails", {
          title: "Jindal Steel and Power",
          headline: "ATTENDANCE SHEET",
          project_details: projectDetails,
        });
      }
    );
  }
  // Filter based on author and label
  else if (req.body.ename) {
    ProjectDetail.find(
      {
        author: req.body.ename,
      },
      function (err, projectDetails) {
        if (err) {
          console.log("Fetching error in Database");
          return;
        }
        return res.render("projectdetails", {
          title: "JSPL",
          headline: "ATTENDANCE SHEET",
          project_details: projectDetails,
        });
      }
    );
  }
  // Filter based on label only
  else {
    ProjectDetail.find({
      department:req.body.department
    }, function (err, projectDetails) {
      if (err) {
        console.log("Fetching error in Database");
        return;
      }
      return res.render("projectdetails", {
        title: "JSPL",
        headline: "ATTENDANCE SHEET",
        project_details: projectDetails,
      });
    });
  }
};
