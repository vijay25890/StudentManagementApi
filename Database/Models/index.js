const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: Number,
    unique: true,
  },
  dob: {
    type: Date,
  },
  year: {
    type: String,
    default: "B.Tech 4th",
  },
  contactNumber: [
    {
      type: Number,
    },
  ],
  email: {
    type: String,
  },
});

const StudentData = new mongoose.model("StudentData", StudentSchema);

module.exports = StudentData;
