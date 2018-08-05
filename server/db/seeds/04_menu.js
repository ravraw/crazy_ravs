exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("menu_type")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menu_type").insert([
        { menu_type: "main" },
        { menu_type: "burgerBuilder" },
        { menu_type: "combo" }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("menu_category").insert([
        { category: "burger" },
        { category: "shake" },
        { category: "side" },
        { category: "bunType" }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("menuItem_type").insert([
        { type: "food" },
        { type: "beverage" },
        { type: "liquor" },
        { type: "merchandise" }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("meat_type").insert([
        { type: "noMeat" },
        { type: "beef" },
        { type: "chicken" },
        { type: "turky" },
        { type: "pork" },
        { type: "lamb" },
        { type: "salmon" },
        { type: "crab" }
      ]);
    });
};
