const { Users, Thoughts } = require("../models");

const thoughtController = {
  getThought(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thoughts.findOne(req.body.params, { _id })
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
    console.log("get thought");
  },
  createThought(req, res) {
    Thoughts.create(req.body)
      .then((createThought) => res.json(createThought))
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    console.log("update thought");
    Thoughts.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought posted with this id!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    console.log("delete user");
  },
};

module.exports = thoughtController;
