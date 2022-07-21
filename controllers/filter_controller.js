// required project details schema
const ProjectDetail = require("../models/projectDetails");

// rendered page based on search by author,title & lable
module.exports.filter = function (req, res) {
  // 
  console.log("query", req.query);
  console.log("body", req.body);
  console.log("level 0", req.body.label[1]);

  // assigning param query into variables
  const projectId = req.query.project_Id;
  const projectName = req.query.name;
  const description = req.query.description;
  const author = req.query.author;

  // Search based on combination of title and Lable
  if (req.body.title) {
    ProjectDetail.find(
      {
        $and: [
          {
            projectId: projectId,
          },
          {
            title: req.body.title,
          },
          // {
          //   $or: [
          //     { label: req.body.label[0], label: req.body.label[1] },

          //     { label: req.body.label },
          //   ],
          // },
        ],
      },
      function (err, projectDetails) {
        if (err) {
          console.log("Fetching error in Database");
          return;
        }
        return res.render("projectdetails", {
          title: "Issue Tracker",
          headline: "ISSUE TRACKER filter",
          project_details: projectDetails,
          project_id: projectId,
          project_name: projectName,
          project_desc: description,
          project_author: author,
        });
      }
    );
  }
  // Filter based on author and label
  else if (req.body.author) {
    ProjectDetail.find(
      {
        $and: [
          {
            projectId: projectId,
          },
          {
            author: req.body.author,
          },
          {
            $or: [
              { label: req.body.label[0], label: req.body.label[1] },

              { label: req.body.label },
            ],
          },
        ],
      },
      function (err, projectDetails) {
        if (err) {
          console.log("Fetching error in Database");
          return;
        }
        return res.render("projectdetails", {
          title: "Issue Tracker",
          headline: "ISSUE TRACKER filter",
          project_details: projectDetails,
          project_id: projectId,
          project_name: projectName,
          project_desc: description,
          project_author: author,
        });
      }
    );
  }
  // Filter based on label only
  else {
    ProjectDetail.find(
      {
        $and: [
          {
            projectId: projectId,
          },

          {
            $or: [
              { label: req.body.label[0], label: req.body.label[1] },

              { label: req.body.label },
            ],
          },
        ],
      },
      function (err, projectDetails) {
        if (err) {
          console.log("Fetching error in Database");
          return;
        }
        return res.render("projectdetails", {
          title: "Issue Tracker",
          headline: "ISSUE TRACKER filter",
          project_details: projectDetails,
          project_id: projectId,
          project_name: projectName,
          project_desc: description,
          project_author: author,
        });
      }
    );
  }
};
