const Employee = require("../models/Employee");

const addEmployee = async (req, res) => {
  const { Name, Title, HireDate, Country, ReportTo, Action } = req.body;
  const image = req.file.path; // assuming you're using multer for file upload

  try {
    const employee = await Employee.create({ Name, Title, HireDate, Country, ReportTo, Action, image });
    res.status(201).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const editEmployee = async (req, res) => {
  const { id } = req.params;
  const { Name, Title, HireDate, Country, ReportTo, Action } = req.body;

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    if (Name) employee.Name = Name;
    if (Title) employee.Title = Title;
    if (HireDate) employee.HireDate = HireDate;
    if (Country) employee.Country = Country;
    if (ReportTo) employee.ReportTo = ReportTo;
    if (Action) employee.HireDate = Action;


    if (req.file) {
      employee.image = req.file.path;
    }

    await employee.save();
    res.json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = { addEmployee, editEmployee, deleteEmployee, getAllEmployees };
