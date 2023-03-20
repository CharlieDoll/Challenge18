const router = require("express").Router();

const {
  createThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

const {
  getallUsers,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getallUsers).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route("/:userId/thoughts").post(createThought);

// /api/users/:userId/thoughts/:thoughtsId
router.route("/:userId/thoughts/:thoughtsId").delete(deleteThought);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
