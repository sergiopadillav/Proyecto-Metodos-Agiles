const express = require('express');
const router = express.Router();
const EmployeeControllers = require("../api/controllers/employee.controllers")

router.post("/employee", EmployeeControllers.save);
router.get("/employee", EmployeeControllers.get);
router.put("/employee/:id", EmployeeControllers.put);

module.exports = router;