exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_login")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_login").insert([
        { email: "user1@gmail.com", password: "user1123", user_id: "1" },
        { email: "user2@gmail.com", password: "user2123", user_id: "2" },
        { email: "user3@gmail.com", password: "user3123", user_id: "3" }
      ]);
    });
};
