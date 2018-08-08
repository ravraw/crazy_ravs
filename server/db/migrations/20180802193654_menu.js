exports.up = function(knex, Promise) {
  return (
    knex.schema
      //  menu_section  (burger,shakes,sides,buns,sauces,pickles.....)
      .createTable("menu_section", function(table) {
        table
          .string("menu_section")
          .primary()
          .unique()
          .notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })

      //  fnb_type (food,beverage,liquor,merchandise.....)
      .createTable("fnb_type", function(table) {
        table
          .string("fnb_type")
          .primary()
          .unique()
          .notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      // meat_type (beef,chicken,seafood,mix,pork,goat,sheep,veg,......)
      .createTable("meat_type", function(table) {
        table
          .string("meat_type")
          .unique()
          .primary()
          .notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema

    .dropTable("menu_section")
    .dropTable("fnb_type")
    .dropTable("meat_type");
  s;
};
