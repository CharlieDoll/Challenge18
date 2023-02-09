const router = require("express").router();
const thoughtsRoutes = require("./thoughtsRoutes");
const usersRoutes = require("./usersRoutes");

router.use("/api/thoughts", thoughtsRoutes);
router.use("/api/users", usersRoutes);

module.exports = router;
