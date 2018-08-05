exports.up = function(knex, Promise) {
  return (
    knex.schema

      //<=========  TABLES FOR  MENU TYPE / CATEGORY =============>//

      // 1. menu_type  (main,burgerbuilder,lunch,dinner,happyhour, promotional,newYears,Valentines ......)
      .createTable("menu_type", function(table) {
        table.increments();
        table.string("menu_type");
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
      .createTable("meat_type", function(table) {
        table.increments();
        table.string("type").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
    // diet_type (regular,veg,halal,glutenFriendly,lactosFriendly,lowCarb,lowFat,lowCalorie,highFibre,.....)
    // .createTable("diet_type", function(table) {
    //   table.increments();
    //   table.string("type").notNullable();
    //   table.timestamp("created_at").defaultTo(knex.fn.now());
    //   table.timestamp("updated_at").defaultTo(knex.fn.now());
    // })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("menu_type")
    .dropTable("menu_category")
    .dropTable("menuItem_type")
    .dropTable("meat_type");
  // .dropTable("diet_type");
};
