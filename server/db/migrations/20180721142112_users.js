exports.up = function(knex, Promise) {
  return (
    knex.schema
      // users table
      .createTable("users", function(table) {
        table.increments();
        table.string("username").notNullable();
        table
          .string("email")
          .unique()
          .notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })

      // user_login table
      .createTable("user_login", table => {
        table.increments();
        table
          .integer("user_id")
          .unique()
          .notNullable()
          .unsigned()
          .references("id_in_users");
        table
          .string("email")
          .notNullable()
          .unsigned();
        table.foreign("email").references("email_in_users");
        table.string("password").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      // user_profile table
      .createTable("user_profile", table => {
        table.increments();
        table
          .integer("user_id")
          .unique()
          .notNullable()
          .unsigned();
        table.foreign("user_id").references("id_in_users");
        table.string("first_name");
        table.string("last_name");
        table.string("phone_number");
        table.string("house_number");
        table.string("building_name");
        table.string("street_name");
        table.string("area_zip");
        table.string("city_name");
        table.string("state_name");
        table.string("avatar");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("user_profile")
    .dropTable("user_login")
    .dropTable("users");
};
