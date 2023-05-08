const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// Require routes Folder
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DataBase Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/HyperZep", {
    useNewUrlParser: true,
  })
  .then(() => console.log("DataBase connection successful"))
  .catch((err) => console.log(err));

// api
app.use(express.json());
app.use("/api/employee", employeeRoutes);

// Localhost
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));
