exports.up = function(knex, Promise) {
  return (
    knex.schema
      .createTable("users", table => {
        table.increments();
        table.string("username").notNullable(),
          table
            .string("email")
            .unique()
            .notNullable(),
          table.string("password").notNullable();
      })
      // user_profile table
      .createTable("user_profile", table => {
        table.increments();
        // table
        //   .integer("user_id")
        //   .references("id")
        //   .inTable("users")
        //   .notNull()
        //   .foreign()
        //   .onDelete("cascade");
        table.integer("user_id").unsigned();
        table.foreign("user_id").references("user_id_in_users");
        table.string("first_name");
        table.string("last_name");
        table.string("phone_number");
        table.string("house_number");
        table.string("building_name");
        table.string("street_name");
        table.string("area_zip");
        table.string("city_name");
        table.string("state_name");
        table.string("facebook_handle");
        table.string("instagram_handle");
        table.string("avatar");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user_profile").dropTable("users");
};
