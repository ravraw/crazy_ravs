exports.up = function(knex, Promise) {
  return (
    knex.schema
      //   <=========  TABLES FOR  MENU OR ITEM AVAILABILITY =============>//

      // week_availability (allweek,weekdays,weekends)
      .createTable(" week_availability", function(table) {
        table.increments();
        table.string("available").notNullable();
        table.integer("startday").notNullable();
        table.integer("endday").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      // day_availability (allDay,11,11 / BreakFast,6,11 /brunch,11,4 / lunch,11,4/ HH,4,8 / Dinner,8,11)
      .createTable("day_availability", function(table) {
        table.increments();
        table.string("available").notNullable();
        table.time("starttime").notNullable();
        table.time("endtime").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      //day_week_availability (allweek 6-11,allweek 4-6, weekend 4-6.....)
      .createTable("day_week_availability", function(table) {
        table.increments();
        table.integer("week_availability").unsigned();
        table
          .foreign("week_availability")
          .references("id_in_week_availability");
        table.integer("day_availability").unsigned();
        table.foreign("day_availability").references("id_in_day_availability");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      //date_day_week_availability
      .createTable("date_day_week_availability", function(table) {
        table.increments();
        table.string("day_week_availability").notNullable();
        table
          .foreign("day_week_availability")
          .references("id_in_day_week_availability");
        table.date("startdate").notNullable();
        table.date("enddate").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
      //current_availability
      .createTable("current_availability", function(table) {
        table.increments();
        table.boolean("available").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("week_availability")
    .dropTable("day_availability")
    .dropTable("day_week_availability")
    .dropTable("date_day_week_availability")
    .dropTable("current_availability");
};
