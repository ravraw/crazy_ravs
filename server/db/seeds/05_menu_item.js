const generateSeed = (
  num,
  category,
  price,
  menu_type,
  menuItem_type,
  meat_type,
  availability
) => {
  const seed = [];
  for (let i = 0; i < num; i++) {
    seed.push({
      item_name: `${category}- ${i + 1}`,
      item_price: price,
      item_description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sint molestias quos, dicta, architecto aliquam atque illum repellendus!.",
      menu_type: menu_type,
      menu_category: category,
      menuItem_type: menuItem_type,
      meat_type: meat_type,
      availability: availability,
      item_image: `images/${category}_${i + 1}.png`
    });
  }
  return seed;
};

const seeds = [
  ...generateSeed(10, "burger", 10, 1, 1, 2),
  ...generateSeed(10, "shake", 5, 1, 2, 1),
  ...generateSeed(8, "sides", 3, 1, 1, 1),
  ...generateSeed(8, "bunType", 3, 2, 1, 1),
  ...generateSeed(8, "bunType", 3, 2, 1, 1),
  ...generateSeed(8, "bunType", 3, 2, 1, 1),
  ...generateSeed(8, "bunType", 3, 2, 1, 1),
  ...generateSeed(8, "bunType", 3, 2, 1, 1),
  ...generateSeed(8, "bunType", 3, 2, 1, 1),
  ...generateSeed(8, "bunType", 3, 2, 1, 1)
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("menu_item")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menu_item").insert(seeds);
    });
};
