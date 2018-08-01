exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_profile")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_profile").insert([
        {
          user_id: 1,
          first_name: "rav1",
          last_name: "raw1",
          phone_number: "+1111111111",
          house_number: "111",
          building_name: "building111",
          street_name: "street111",
          area_zip: "aaa111",
          city_name: "city",
          state_name: "state",
          avatar: ""
        },
        {
          user_id: 2,
          first_name: "rav2",
          last_name: "raw2",
          phone_number: "+1222222222",
          house_number: "222",
          building_name: "building222",
          street_name: "street222",
          area_zip: "aaa222",
          city_name: "city",
          state_name: "state",
          avatar: ""
        },
        {
          user_id: 3,
          first_name: "rav3",
          last_name: "raw3",
          phone_number: "+1333333333",
          house_number: "333",
          building_name: "building333",
          street_name: "street333",
          area_zip: "aaa333",
          city_name: "city",
          state_name: "state",
          avatar: ""
        }
      ]);
    });
};
