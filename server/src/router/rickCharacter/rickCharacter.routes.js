const { browse } = require("../../controllers/rickCharacter.controller");

const express = require("express");
const router = express.Router();

router.get("/character", browse);

module.exports = router;