const { Users, Thoughts } = require("../models");

const thoughtController = {
  getThought(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    console.log("get user");
  },
  createThought(req, res) {
    console.log("crate user");
  },
  updateThought(req, res) {
    console.log("update thought");
  },
  deleteThought(req, res) {
    console.log("delete user");
  },
};

module.exports = thoughtController;
