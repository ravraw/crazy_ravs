require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcrypt-nodejs");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load Input Validation
const validateSignupData = require("../../validation/signup");
const validateSigninData = require("../../validation/signin");

// knex setup
const ENV = process.env.ENV || "development";
const knexConfig = require("../../knexfile");
const knex = require("knex")(knexConfig[ENV]);

// @route GET api/users/test
// @desc Test users route
// @access Public

router.get("/test", (req, res) => res.json({ msg: "users works" }));

// @route POST api/users/signup
// @desc Signup users /
// @access Public

router.post("/signup", (req, res, next) => {
  // check Validation
  const { errors, isValid } = validateSignupData(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // if no errors continue
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password);

  knex
    .select("email")
    .from("users")
    .where("email", "=", req.body.email)
    .then(user => {
      if (!user[0]) {
        knex
          .insert({
            username: username,
            password: hash,
            email: email
          })
          .into("users")
          .returning("*")
          .then(user =>
            knex
              .insert({
                user_id: user[0].id
              })
              .into("user_profile")
              .then(res.status(200).json(user[0].id))
          );
      } else {
        res.status(400).json({ msg: "email already exists" });
      }
    })
    .catch(err => res.status(400).json({ error: err }));
});

// @route POST api/users/signin
// @desc Signin users / Returning JWT token
// @access Public

router.post("/signin", (req, res) => {
  // check Validation
  const { errors, isValid } = validateSigninData(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // IF no validation errors continue
  const { email, password } = req.body;
  //Check for user
  knex
    .select("*")
    .from("users")
    .where("email", "=", email)
    .then(user => {
      if (!user[0]) {
        // If user not found
        res.status(404).json({ error: "Invalid email " });
      } else {
        // If user found check password
        const isValid = bcrypt.compareSync(password, user[0].password);
        if (isValid) {
          return knex
            .select("id", "username", "email")
            .from("users")
            .where("email", "=", req.body.email)
            .then(user => {
              const payload = {
                id: user[0].id,
                username: user[0].username,
                email: user[0].email
              };
              //Sign JWT token and send as response
              jwt.sign(
                payload,
                process.env.JWT_SECRET_KEY,
                {
                  expiresIn: 1 * 60 * 60 * 1000
                },
                (err, token) => {
                  res.json({
                    success: true,
                    token: `Bearer ${token}`
                  });
                }
              );
            })
            .catch(err => res.status(400).json("Invalid password"));
        }
      }
    })
    .catch(err => res.json({ error: err }));
});

// @route POST api/users/current
// @desc return current user
// @access Private

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email
    });
  }
);

module.exports = router;
