const router = require("express").Router();
const passport = require("passport");

//auth login
router.get("/login", (req, res) => {});

// auth logout
router.get("/logout", (req, res) => {});

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.send("you reached the redirect URI");
});

module.exports = router;
