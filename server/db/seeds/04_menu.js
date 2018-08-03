exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("menu_type")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menu_type").insert([
        { date_day_week_availability: 1, menu_type: "main" },
        { date_day_week_availability: 1, menu_type: "burgerBuilder" },
        { date_day_week_availability: 1, menu_type: "combs" }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("menu_category").insert([
        { category: "burger" },
        { category: "shake" },
        { category: "side" }
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
