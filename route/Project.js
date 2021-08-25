const express = require("express");
const router = express.Router();
const passport = require("passport");

const Project = require("../controller/Project");

// @route GET api/projects
// @desc Get all projects for a specific user
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
    Project.details
);

// @route GET api/projects/:id
// @desc Get specific project by id
// @access Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  Project.detail
);

// @route POST api/projects/create
// @desc Create a new project
// @access Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  Project.create
);

// @route PATCH api/projects/update
// @desc Update an existing project
// @access Private
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  Project.update
);

// @route DELETE api/projects/delete/:id
// @desc Delete an existing project
// @access Private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  Project.delete
);

module.exports = router;