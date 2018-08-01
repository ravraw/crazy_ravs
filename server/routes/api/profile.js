require("dotenv").config();
const router = require("express").Router();
const passport = require("passport");

// knex setup
const ENV = process.env.ENV || "development";
const knexConfig = require("../../knexfile");
const knex = require("knex")(knexConfig[ENV]);

// @route GET api/profile/test
// @desc Test profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "profile works" }));

// @route GET api/profile
// @desc Get current user's profile
// @access Private

router.get(
  "/",
  passport.authenticate("jwt", { sessions: false }),
  (req, res) => {
    console.log(req.user);
    knex
      .select("*")
      .from("user_profile")
      .where("user_id", "=", req.user.id)
      .then(profile => res.json(profile[0]))
      .catch(err => console.log(err));
  }
);

// @route POST api/profile
// @desc Update current users profile
// @access Private

router.put(
  "/",
  passport.authenticate("jwt", { sessions: false }),
  (req, res) => {
    const {
      first_name,
      last_name,
      phone_number,
      house_number,
      building_name,
      street_name,
      area_zip,
      city_name,
      state_name,
      avatar
    } = req.body;

    const updatedProfile = {
      first_name,
      last_name,
      phone_number,
      house_number,
      building_name,
      street_name,
      area_zip,
      city_name,
      state_name,
      avatar
    };
    knex("user_profile")
      .where("user_id", "=", req.user.id)
      .update({
        ...updatedProfile
      })
      .returning("*")
      .then(profile => res.json(profile[0]))
      .catch(err => console.log(err));
  }
);

module.exports = router;
