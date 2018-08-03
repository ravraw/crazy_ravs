exports.up = function(knex, Promise) {
  knex.schema
    // users table
    .createTable("users", function(table) {
      table.increments();
      table.string("item_name").notNullable();
      table.decimal("item_price").notNullable();
      table.string("item_description").notNullable();
      table.string("menu_type").notNullable();
      table.string("menu_category").notNullable();
      table.string("item_type").notNullable();
      table.string("meat_type").notNullable();
      table.string("availability").notNullable();
      table.string("item_image");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {};
