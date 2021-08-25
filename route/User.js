const express = require("express");
const router = express.Router();

// Load User model
const User = require("../controller/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", User.register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login",User.login);

module.exports = router;