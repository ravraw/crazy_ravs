const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

const port = process.env.PORT || 3005;
// knex setup
const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
// app
const app = express();

// middlewares
app.use(bodyparser.json());
require("dotenv").config();
app.use(cors());

// GET users

app.get("/users", (req, res) => {
  knex.raw("select * from users ").then(user => {
    res.json(user.rows);
  });
});

// POST signup

app.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;
  const hash = bcrypt.hashSync(password);
  knex
    .transaction(trx => {
      trx
        .insert({
          username: username,
          email: email
        })
        .into("users")
        .returning("*")
        .then(user => {
          console.log(users);
          return (
            trx("user_login")
              .returning("*")
              .insert({
                user_id: user[0].id,
                password: hash,
                email: email
              })

              // .then(user => {
              //   console.log(user);
              //   return trx("user_profile")
              //     .returning("*")
              //     .insert({
              //       user_id: user[0].id
              //     })
              .then(user => res.status(200).json(user[0]))
          );
          // });
        })
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .catch(err => res.status(400).json(err));
});

//-----POST "/signin"
app.post("/signin", (req, res) => {
  knex
    .select("email", "password")
    .from("user_login")
    .where("email", "=", req.body.email)
    .then(data => {
      console.log(data);
      const isValid = bcrypt.compareSync(req.body.password, data[0].password);
      if (isValid) {
        return knex
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then(user => {
            res.status(200).json(user[0]);
          })
          .catch(err => res.status(400).json("unable to get user"));
      }
    })
    .catch(err => res.status(400).json("wrong credentials"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}....`);
});

//GET  Profile

app.get("/profile/:id", (req, res) => {
  knex
    .select("*")
    .from("user_profile")
    .where("user_id", "=", req.params.id)
    .then(profile => res.json(profile));
});

//POST  Profile

app.post("users/:id/profile", (req, res) => {
  knex("user_profile").insert({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    house_number: req.body.house_number,
    building_name: req.body.building_number,
    street_name: req.body.street_name,
    area_zip: req.body.area_zip,
    city_name: req.body.city,
    state_name: req.body.country,
    avatar: req.body.avatar
  });
});

// DELETE profile
app.delete("/profile/:id", (req, res) => {
  knex
    .select("*")
    .from("user_profile")
    .where("id", req.params.id)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});
