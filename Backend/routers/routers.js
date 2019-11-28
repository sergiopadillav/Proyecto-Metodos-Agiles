const express = require('express');
const router = express.Router();
const EmployeeControllers = require("../api/controllers/employee.controllers")
const adminControllers = require("../api/controllers/admin.controller")
const verify = require("../api/auth/verifyToken");


router.post("/employee", EmployeeControllers.save);
router.put("/employee/:id", EmployeeControllers.put);
router.get("/employee", EmployeeControllers.get);

router.post("/signin", adminControllers.signin);
router.post("/signup", adminControllers.save); 

module.exports = router;