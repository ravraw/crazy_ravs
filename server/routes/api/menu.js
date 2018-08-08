require("dotenv").config();
const router = require("express").Router();
// const passport = require("passport");

// knex setup
const ENV = process.env.ENV || "development";
const knexConfig = require("../../knexfile");
const knex = require("knex")(knexConfig[ENV]);

// @route GET api/menu
// @desc get menu items
// @access Public

router.get("/", (req, res) => {
  knex
    .select("*")
    .from("menu_item")
    .then(items => {
      // console.log(items);
      // const menuItems = items.map(el => {
      //   return {
      //     name: el.item_name,
      //     price: +el.item_price,
      //     description: el.item_description,
      //     menu_type: knex
      //       .select("menu_type")
      //       .from("menu_type")
      //       .where("id", "=", el.menu_type)
      //   };
      // });

      // console.log(menuItems);

      res.status(200).json(items);
    })
    .catch(err => res.json(err));
});

module.exports = router;
