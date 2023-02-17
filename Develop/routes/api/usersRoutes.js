const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getUser).post(createUser);

// /api/user/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route("/:userId/thoughts").post(addThought);

// /api/users/:userId/thoughts/:thoughtsId
router.route("/:userId/thoughts/:thoughtsId").delete(removeThought);

module.exports = router;
