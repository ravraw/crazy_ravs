const router = require("express").Router();

// @route GET api/users/test
// @desc Test users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;