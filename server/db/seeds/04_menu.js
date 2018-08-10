exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("menu_section", "fnb_type", "meat_type")
    .del()

    .then(function() {
      // Inserts seed entries
      return knex("menu_section").insert([
        { menu_section: "burger" },
        { menu_section: "shake" },
        { menu_section: "side" },
        { menu_section: "combo" },
        { menu_section: "bun" },
        { menu_section: "sauce" },
        { menu_section: "patty" },
        { menu_section: "cheese" },
        { menu_section: "salad" },
        { menu_section: "pickle" },
        { menu_section: "meat_topping" }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("fnb_type").insert([
        { fnb_type: "food" },
        { fnb_type: "beverage" }
        // { fnb_type: "liquor" },
        // { fnb_type: "merchandise" }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("meat_type").insert([
        { meat_type: "veg" },
        { meat_type: "beef" },
        { meat_type: "chicken" },
        { meat_type: "turky" },
        { meat_type: "pork" },
        { meat_type: "lamb" },
        { meat_type: "salmon" },
        { meat_type: "crab" }
      ]);
    });
};
