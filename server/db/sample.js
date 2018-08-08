exports.up = function(knex, Promise) {
  return (
    knex.schema

      //<=========  TABLES FOR  MENU TYPE / CATEGORY =============>//

      // 1. menu_type  (lunch,dinner,happyhour, promotional,newYears,Valentines ......)
      .createTable("menu_type", function(table) {
        table.increments();
        table.string("type").notNullable();
        table.string("date_week_day_availability").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      // 2. menu_category (soups, salad,burgers, desserts,shakes , sides,extras,toppings.......)
      .createTable("menu_category", function(table) {
        table.increments();
        table.string("category").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })

      // 3<=========  TABLES FOR  MENU ITEMS =============>//

      //  menuItem_type (food,beverage,liquor,merchandise.....)
      .createTable("menuItem_type", function(table) {
        table.increments();
        table.string("type").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      // meat_type (beef,chicken,seafood,mix,pork,goat,sheep,veg,......)
      .createTable("menuItem_type", function(table) {
        table.increments();
        table.string("type").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      // diet_type (regular,veg,halal,glutenFriendly,lactosFriendly,lowCarb,lowFat,lowCalorie,highFibre,.....)
      .createTable("menuItem_type", function(table) {
        table.increments();
        table.string("type").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })

      //<========= AND FINALLY TABLES FOR MENU ITEMS =============>//

      // menu_item table
      .createTable("menu_item", function(table) {
        table.increments();
        table.string("item_name").notNullable();
        table.decimal("item_price").notNullable();
        table.string("item_description").notNullable();
        table.string("menu_type").notNullable();
        table.string("menu_category").notNullable();
        table.string("item_type").notNullable();
        table.string("meat_type").notNullable();
        table.string("availability").notNullable();
        table.string("item_image").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user_profile").dropTable("users");
};

////////

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  const generateSeeds = (
    quantity,
    menu_type,
    item_type,
    price,
    availability
  ) => {
    const itemList = [];
    for (let i = 0; i < quantity; i++) {
      let item = {
        item_name: `${item_type} ${i + 1}`,
        item_price: price,
        item_description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam suscipit voluptatem tenetur explicabo exercitationem!.",
        menu_type: menu_type,
        item_type: item_type,
        time_available: availability,
        item_image: `./images/${item_type}_${i + 1}`
      };
      itemList.push(item);
    }
    return itemList;
  };

  const seeds = [
    ...generateSeeds(15, "main", "burger", 10, "all day"),
    ...generateSeeds(10, "main", "shakes", 8, "all day"),
    ...generateSeeds(10, "main", "sides", 8, "all day"),
    ...generateSeeds(6, "combo", "combo", 8, "all day"),
    ...generateSeeds(10, "burgerbuilder", "bun", 8, "all day"),
    ...generateSeeds(10, "burgerbuilder", "patty", 8, "all day"),
    ...generateSeeds(10, "burgerbuilder", "sauce", 8, "all day"),
    ...generateSeeds(10, "burgerbuilder", "salad", 8, "all day"),
    ...generateSeeds(10, "burgerbuilder", "pickle", 8, "all day"),
    ...generateSeeds(10, "burgerbuilder", "topping", 8, "all day"),
    ...generateSeeds(10, "burgerbuilder", "cheese", 8, "all day")
  ];

  return knex("menu_items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("menu_items").insert(seeds);
    });
};

/////////

// abcdefghijklmnopqurtuvwxyz
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 1234567890

// Ha HaHa

// MetaCharacters (Need to be escaped):
// .[{()\^$|?*+

// coreyms.com

// 321-555-4321
// 123.555.1234

// Mr. Schafer
// Mr Smith
// Ms Davis
// Mrs. Robinson

// id  -- 1
// name -- old timer
// price -- $10
// description -- oldtimer burger
// section -- burgers / shakes / sides
// category -- food / beverage
// meatType -- vegetarian, beef,chicken,lamb,pork,salmon
//

// id  -- 2
// name -- burgerBuilder
// price -- $10
// description -- buildyour burger
// type -- burger/side/shake / bun/sauce/salad/patty/pickle/
// category  -- food / beverage
//
//

// section -- burgers / shakes / sides / burgerbuilder
// category -- food / beverage
// meatType -- vegetarian, beef,chicken,lamb,pork,salmon
//
