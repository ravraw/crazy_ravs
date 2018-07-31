const router = require("express").Router();
const passport = require("passport");

// @route GET auth/test
// @desc Test auth route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "google works" }));

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.json(req.user);
});

module.exports = router;
