// Require moongoose library
const mongoose = require("mongoose");

// Defining project bugs / issue details schema 
const projectDetailSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    projectId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectDetail = mongoose.model("ProjectDetail", projectDetailSchema);
// export project details schema 
module.exports = ProjectDetail;
