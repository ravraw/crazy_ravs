exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shakes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shakes").insert([
        {
          item_name: "Cookie Monster",
          item_price: 5,
          item_description: "Shake Topped with Oreos and Glazed Donut",
          menu_type: "main",
          item_type: "shakes",
          item_image: "./images/cookie_monster_shake"
        },
        {
          item_name: "Cococola",
          item_price: 5,
          item_description:
            "Coconut Shell filled with Virgin Pina Colada Flavoured Shake",
          menu_type: "main",
          item_type: "shakes",
          item_image: "./images/cococola_shake"
        },
        {
          item_name: "Sugar Rush",
          item_price: 5,
          item_description:
            "Shake Topped with Brownie and Chocolate Chip Cookie Ice Cream Sandwich",
          menu_type: "main",
          item_type: "shakes",
          item_image: "./images/sugar_rush_shake"
        }
      ]);
    });
};
