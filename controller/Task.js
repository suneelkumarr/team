const Task = require("../model/Task");



exports.details =(req, res) => {
    let id = req.params.id;

    Task.find({ project: id }).then(tasks => res.json(tasks));
  }

  exports.create= (req, res) => {
    const NEW_TASK = new Task({
      project: req.body.project,
      taskName: req.body.taskName,
      dateDue: req.body.dateDue,
      assignee: req.body.assignee
    });

    NEW_TASK.save()
      .then(task => res.json(task))
      .catch(err => console.log(err));
  }

  exports.delete = (req, res) => {
    Task.findById(req.params.id).then(task => {
      task.remove().then(() => res.json({ success: true }));
    });
  }


  exports.update =(req, res) => {
    let taskFields = {};

    taskFields.taskName = req.body.taskName;
    if (req.body.dateDue && req.body.dateDue !== "Date undefined") {
      taskFields.dateDue = req.body.dateDue;
    }
    taskFields.assignee = req.body.assignee;

    Task.findOneAndUpdate(
      { _id: req.body.id },
      { $set: taskFields },
      { new: true }
    )
      .then(task => {
        res.json(task);
      })
      .catch(err => console.log(err));
  }