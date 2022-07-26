// Require moongoose library
const mongoose = require("mongoose");

// Defining project list schema 
const projectListSchema = new mongoose.Schema(
  {
    ename: {
      type: String,
      required: true,
    },
    ecode: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    shift: {
      type: String,
      required: true,
    },
    date: {
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
