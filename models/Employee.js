const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Title: { type: String, required: true },
  HireDate: { type: String, required: true },
  Country: { type: String, required: true },
  ReportTo: { type: String, required: true },
  HireDate: { type: String, required: true },
  Action: { type: String, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;

