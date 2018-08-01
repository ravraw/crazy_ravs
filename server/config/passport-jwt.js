require("dotenv").config();

// knex setup
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);

//JWT STRATEGY
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

passport.serializeUser((user, done) => {
  console.log("--- serialize-------", user);
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  console.log("--- deserialize-------", id);
  knex
    .select("*")
    .from("users")
    .where("id", "=", id)
    .then(user => done(null, user.id))
    .catch(err => console.log(err));
});

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      knex
        .select("*")
        .from("users")
        .where("id", "=", jwt_payload.id)
        .then(user => {
          if (user[0]) {
            return done(null, user[0]);
          }
          return done(null, false);
        })
        .catch(err => console.error(err));
    })
  );
};
