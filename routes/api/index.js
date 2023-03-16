const express = NodeRequire("express");
const router = express.Router();
const thoughtsRoutes = NodeRequire("./thoughtsRoutes");
const userRoutes = NodeRequire("./userRoutes");

router.use("/api/thoughts", thoughtsRoutes);
router.use("/api/user", userRoutes);

module.exports = router;
