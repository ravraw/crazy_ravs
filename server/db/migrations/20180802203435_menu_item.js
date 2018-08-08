exports.up = function(knex, Promise) {
  return (
    knex.schema
      // menu_item table
      .createTable("menu_item", function(table) {
        table.increments();
        table.string("name").notNullable();
        table.decimal("price").notNullable();
        table.string("description").notNullable();
        table.string("menu_section").notNullable();
        table
          .foreign("menu_section")
          .references("menu_section_in_menu_section");
        table.string("fnb_type").notNullable();
        table.foreign("fnb_type").references("fnb_type_in_fnb_type");
        table.string("meat_type").notNullable();
        table.foreign("meat_type").references("meat_type_in_meat_type");
        table
          .boolean("current_availability")
          .notNullable()
          .defaultTo(true);
        table.string("image");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("menu_item");
};
