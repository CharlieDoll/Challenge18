const { Users, Thoughts } = require("../models");

const userController = {
  getallUsers(req, res) {
    Users.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getSingleUser(req, res) {
    console.log("get user");
  },
  createUser(req, res) {
    console.log(req.body);
    Users.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(500).json(err));
    console.log("create user");
  },
  deleteUser(req, res) {
    console.log("delete user");
  },
};

module.exports = userController;

// addThought,
// removeThought,
