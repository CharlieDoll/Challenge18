const { Users, Thoughts } = require("../models");

const userController = {
  getallUsers(req, res) {
    Users.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = userController;
