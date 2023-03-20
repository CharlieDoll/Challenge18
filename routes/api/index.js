const express = require("express");
const router = express.Router();
const thoughtsRoutes = require("./thoughtsRoutes");
const userRoutes = require("./userRoutes");

router.use("/thoughts", thoughtsRoutes);
router.use("/users", userRoutes);

module.exports = router;
