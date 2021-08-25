const express = require("express");
const router = express.Router();
const passport = require("passport");

const Task = require("../controller/Task");

// @route GET api/tasks/:id
// @desc Get tasks for specific project
// @access Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }), Task.details
);

// @route POST api/tasks/create
// @desc Create a new task
// @access Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
Task.create
);

// @route POST api/tasks/delete
// @desc Delete an existing task
// @access Private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  Task.delete
);

// @route PATCH api/tasks/update
// @desc Update an existing task
// @access Private
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
Task.update
);

module.exports = router;