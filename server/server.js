require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");

const port = process.env.PORT || 3005;

// KNEX SETUP
const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

// ROUTES
const { users, profile, posts } = require("./routes/api");
const authGoogle = require("./routes/google");

// APP
const app = express();

// MIDDLEWARES
app.use(bodyparser.json());
app.use(cors());
// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [process.env.COOKIE_KEY]
//   })
// );
// PASSPORT MIDDLEWARES
app.use(passport.initialize());
// app.use(passport.session());

// PASSPORT CONFIG
// const passportSetup = require("./config/passport-setup");
require("./config/passport-jwt")(passport);

// USE ROUTES
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/post", posts);
app.use("/auth", authGoogle);

// // GET users

// app.get("/users", (req, res) => {
//   knex.raw("select * from users ").then(user => {
//     res.json(user.rows);
//   });
// });

// //GET  Profile

// app.get("/profile/:id", (req, res) => {
//   knex
//     .select("*")
//     .from("user_profile")
//     .where("user_id", "=", req.params.id)
//     .then(profile => res.json(profile));
// });

// //POST  Profile

// app.post("users/:id/profile", (req, res) => {
//   knex("user_profile").insert({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     phone_number: req.body.phone_number,
//     house_number: req.body.house_number,
//     building_name: req.body.building_number,
//     street_name: req.body.street_name,
//     area_zip: req.body.area_zip,
//     city_name: req.body.city,
//     state_name: req.body.country,
//     avatar: req.body.avatar
//   });
// });

// // DELETE profile
// app.delete("/profile/:id", (req, res) => {
//   knex
//     .select("*")
//     .from("user_profile")
//     .where("id", req.params.id)
//     .then(data => res.json(data))
//     .catch(err => console.log(err));
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}....`);
});
