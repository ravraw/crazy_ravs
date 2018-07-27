require("dotenv").config();

// knex setup
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  knex
    .select("*")
    .from("users")
    .where("id", "=", id)
    .then(user => done(null, user.id))
    .catch(err => console.log(err));
});

passport.use(
  new GoogleStrategy(
    {
      //options for new google stra
      callbackURL: "/auth/google/redirect",
      clientID: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET
    },
    (accessToken, refreshToken, profile, email, done) => {
      //passport callback function
      // check if user already exists in our own db
      console.log("Profile call back function fired");

      knex
        .select("*")
        .from("users")
        .where("email", "=", email.emails[0].value)
        .then(registeredUser => {
          if (registeredUser) {
            console.log("Already registered");
            done(null, registeredUser);
          } else {
            knex
              .insert({
                username: email.displayName,
                email: email.emails[0].value
              })
              .into("users")
              .returning("*")
              .then(newUser => {
                console.log(newUser);
                done(null, newUser);
              })
              .catch(err => console.log(err));
          }
        });
    }
  )
);
