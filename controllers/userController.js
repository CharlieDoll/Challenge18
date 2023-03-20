const { Users, Thoughts } = require("../models");
const User = require("../models/users");

const userController = {
  getallUsers(req, res) {
    Users.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getSingleUser(req, res) {
    Users.findOne({ _id: req.params.userId })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
    console.log("get user");
  },
  createUser(req, res) {
    Users.create(req.body)
      .then((createUser) => res.json(createUser))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    console.log("update");
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No such user exists" })
          : Thoughts.findOneAndUpdate(
              { Users: req.params.userId },
              { $pull: { user: req.params.userId } },
              { new: true }
            )
      )
      .then((friends) =>
        !friends
          ? res.status(404).json({
              message: "User deleted, but no friends found",
            })
          : res.json({ message: "User successfully deleted" })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    ).then((dbUserData) => {
      res.json(dbUserData);
    });
  },
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    ).then((dbUserData) => {
      res.json(dbUserData);
    });
  },
};

module.exports = userController;
