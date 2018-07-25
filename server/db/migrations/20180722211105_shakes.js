exports.up = function(knex, Promise) {
  return (
    knex.schema
      // shakes table
      .createTable("shakes", function(table) {
        table.increments();
        table.string("item_name").notNullable();
        table.decimal("item_price").notNullable();
        table.string("item_description").notNullable();
        table.string("menu_type").notNullable();
        table.string("item_type").notNullable();
        table.string("item_image").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("shakes");
};
