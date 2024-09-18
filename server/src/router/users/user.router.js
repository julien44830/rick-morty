// const { registrationValidation} = require("../../../services/validator");
const { add } = require("../../controllers/user.controller");

const express = require("express");
const router = express.Router();

// router.post("/", registrationValidation, add);
router.post("/user", add);

module.exports = router;