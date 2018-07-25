exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("shakes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("shakes").insert([
        {
          id: 1,
          item_name: "Cookie Monster",
          item_price: 5,
          item_description: "Shake Topped with Oreos and Glazed Donut",
          menu_type: "main",
          item_type: "shakes",
          item_image: "./images/cookie_monster_shake"
        },
        {
          id: 2,
          item_name: "Cococola",
          item_price: 5,
          item_description:
            "Coconut Shell filled with Virgin Pina Colada Flavoured Shake",
          menu_type: "main",
          item_type: "shakes",
          item_image: "./images/cococola_shake"
        },
        {
          id: 3,
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
