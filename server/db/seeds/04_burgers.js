exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("burgers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("burgers").insert([
        {
          id: 1,
          item_name: "Oldtimer with Cheese",
          item_price: 10,
          item_description:
            "A Rav’s classic topped with garlic dill pickles, leaf lettuce, tomato, red onions & mustard.",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/oldtimer_with_cheese"
        },
        {
          id: 2,
          item_name: "Classic Bacon Burger",
          item_price: 10,
          item_description:
            "Applewood smoked bacon, sharp cheddar cheese, garlic dill pickles, leaf lettuce, tomato, red onion & Rav’s Signature sauce",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/classic_bacon_burger"
        },
        {
          id: 3,
          item_name: "Southern Smokehouse Burger",
          item_price: 10,
          item_description:
            "Applewood smoked bacon, sharp cheddar cheese, garlic dill pickles, crispy onion rings, leaf lettuce, tomato & Rav’s Signature sauce. Served with a side of Rav’s classic BBQ sauce.",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/southern_smokehouse_burger"
        },
        {
          id: 4,
          item_name: "Guacamole Burger",
          item_price: 10,
          item_description:
            "Fresh guacamole, Monterey Jack cheese, fire-roasted jalapeños, sauteed red & green bell peppers, caramelized onions & cumin-lime sour cream",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/guacamole_burger"
        },
        {
          id: 5,
          item_name: "Sunrise Burger",
          item_price: 10,
          item_description:
            "Fried egg, pepper Jack, bacon, lettuce, red onion & tomato with Rav's Signature sauce",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/sunrise_burger"
        },
        {
          id: 6,
          item_name: "Ultimate Bacon Burger",
          item_price: 10,
          item_description:
            "Double bacon, cheddar, pickles, lettuce, red onion, tomato, jalapeño aioli, spicy Buffalo sauce & honey-chipotle sauce",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/ultimate_bacon_burger"
        },
        {
          id: 7,
          item_name: "Turkey Burger",
          item_price: 10,
          item_description:
            "SEASONED ALL-NATURAL GROUND TURKEY PATTY WITH LETTUCE, TOMATOES, RED ONIONS AND PICKLES.",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/turkey_burger"
        },
        {
          id: 8,
          item_name: "PHILLY CHEESESTEAK BURGER",
          item_price: 10,
          item_description:
            "BEEF PATTY TOPPED WITH ROAST BEEF, PEPPERS, ONIONS AND MELTED CHEESE.",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/philly_cheesesteak_burger"
        },
        {
          id: 9,
          item_name: "SOUTHWESTERN BLACK BEAN BURGER",
          item_price: 10,
          item_description:
            "Black bean burger topped with cheddar cheese and southwestern ranch.",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/black_bean_burger"
        },
        {
          id: 10,
          item_name: "ATOMIC BURGER",
          item_price: 10,
          item_description:
            "Topped with spicy fried onions, fried jalapeños, pepper jack cheese with crisp lettuce, vine-ripened tomato and chipotle aioli.",
          menu_type: "main",
          item_type: "burger",
          item_image: "./images/atomic_burger"
        }
      ]);
    });
};
