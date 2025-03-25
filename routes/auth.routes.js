const express = require("express");
const { register } = require("../controllers/auth.controller");
const router = express.Router();

//routes
// REGISTER || POST
router.post("/register", register);

module.exports = router;
