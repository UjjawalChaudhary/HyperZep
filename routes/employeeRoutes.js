const express = require("express");
const multer = require("multer");
const {
  addEmployee,
  editEmployee,
  deleteEmployee,
  getAllEmployees,
} = require("../controllers/Employee");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), addEmployee);
router.put("/:id", upload.single("image"), editEmployee);
router.delete("/:id", deleteEmployee);
router.get('/employees', getAllEmployees);

module.exports = router;
