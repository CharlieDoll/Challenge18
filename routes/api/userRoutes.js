const router = require("express").Router();

const {
  createThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

const {
  getallUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getallUsers).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route("/:userId/thoughts").post(createThought);

// /api/users/:userId/thoughts/:thoughtsId
router.route("/:userId/thoughts/:thoughtsId").delete(deleteThought);

module.exports = router;
