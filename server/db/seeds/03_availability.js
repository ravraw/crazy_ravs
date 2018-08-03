exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(
    "week_availability",
    "day_availability",
    "day_week_availability",
    "date_day_week_availability",
    "current_availability"
  )
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("week_availability").insert([
        { available: "allweek", startday: 0, endday: 7 },
        { available: "weekday", startday: 0, endday: 5 },
        { available: "weekend", startday: 6, endday: 7 }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("day_availability").insert([
        {
          available: "allday",
          starttime: "00:00:00",
          endtime: "24:00:00"
        },
        {
          available: "breakfast",
          starttime: "06:00:00",
          endtime: "11:00:00"
        },
        {
          available: "lunch",
          starttime: "11:00:00",
          endtime: "16:00:00"
        },
        {
          available: "happyhours",
          starttime: "16:00:00",
          endtime: "18:00:00"
        },
        {
          available: "dinner",
          starttime: "18:00:00",
          endtime: "24:00:00"
        }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("day_week_availability").insert([
        {
          week_availability: 1,
          day_availability: 1
        },
        {
          week_availability: 1,
          day_availability: 2
        },
        {
          week_availability: 1,
          day_availability: 3
        },
        {
          week_availability: 1,
          day_availability: 4
        },
        {
          week_availability: 1,
          day_availability: 5
        },
        {
          week_availability: 2,
          day_availability: 1
        },
        {
          week_availability: 2,
          day_availability: 2
        },
        {
          week_availability: 2,
          day_availability: 3
        },
        {
          week_availability: 2,
          day_availability: 4
        },
        {
          week_availability: 2,
          day_availability: 5
        },
        {
          week_availability: 3,
          day_availability: 1
        },
        {
          week_availability: 3,
          day_availability: 2
        },
        {
          week_availability: 3,
          day_availability: 3
        },
        {
          week_availability: 3,
          day_availability: 4
        },
        {
          week_availability: 3,
          day_availability: 5
        }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("date_day_week_availability").insert([
        {
          day_week_availability: 1,
          startdate: "2017-12-25",
          enddate: "2099-01-01"
        }
      ]);
    })
    .then(function() {
      // Inserts seed entries
      return knex("current_availability").insert([
        { available: true },
        { available: false }
      ]);
    });
};
