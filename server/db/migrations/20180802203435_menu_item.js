exports.up = function(knex, Promise) {
  return (
    knex.schema
      // menu_item table
      .createTable("menu_item", function(table) {
        table.increments();
        table.string("item_name").notNullable();
        table.decimal("item_price").notNullable();
        table.string("item_description").notNullable();
        table.string("menu_type").notNullable();
        table.string("menu_category").notNullable();
        table.string("menuItem_type").notNullable();
        table.string("meat_type").notNullable();
        table
          .string("availability")
          .notNullable()
          .defaultTo(1);
        table
          .foreign("availability")
          .references("id_in_date_day_week_availability");
        table.string("item_image");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("menu_item");
};
