// Require moongoose library
const mongoose = require("mongoose");

// Defining project list schema 
const projectListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectList = mongoose.model("ProjectList", projectListSchema);
// export project list 
module.exports = ProjectList;
