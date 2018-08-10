const generateSeed = (
  qty,
  price,
  name,
  section,
  fnb_type,
  meat_type,
  available
) => {
  const seed = [];
  for (let i = 0; i < qty; i++) {
    seed.push({
      name: `${name}- ${i + 1}`,
      price: price,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sint molestias quos, dicta repellendus!.",
      menu_section: section,
      fnb_type: fnb_type,
      meat_type: meat_type,
      current_availability: available,
      image: `images/${section}_${i + 1}.png`
    });
  }
  return seed;
};

// qty, price, section, 'fnb_type', meat_type, available
const seeds = [
  ...generateSeed(8, 10, "beef-burger", "burger", "food", "beef", true),
  ...generateSeed(5, 10, "lamb-burger", "burger", "food", "lamb", true),
  ...generateSeed(5, 10, "chicken-burger", "burger", "food", "chicken", true),
  ...generateSeed(5, 10, "veggie-burger", "burger", "food", "veg", true),
  ...generateSeed(5, 10, "seafood-burger", "burger", "food", "seafood", true),
  ...generateSeed(10, 6, "choco-shake", "shake", "beverage", "veg", true),
  ...generateSeed(10, 6, "combo", "combo", "food", "beef", true),
  ...generateSeed(10, 3, "fries", "side", "food", "veg", true),
  ...generateSeed(8, 1, "bun type", "bun", "food", "veg", true),
  ...generateSeed(8, 1, "sauce", "sauce", "food", "veg", true),
  ...generateSeed(8, 3, "patty", "patty", "food", "beef", true),
  ...generateSeed(8, 10, "cheese", "cheese", "food", "veg", true),
  ...generateSeed(8, 10, "salad", "salad", "food", "veg", true),
  ...generateSeed(8, 10, "pickle", "pickle", "food", "veg", true),
  ...generateSeed(8, 10, "meat-topping", "meat_topping", "food", "pork", true)
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
