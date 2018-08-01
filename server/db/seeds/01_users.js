exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "user1", email: "user1@gmail.com", password: "user123" },
        { username: "user2", email: "user2@gmail.com", password: "user123" },
        { username: "user3", email: "user3@gmail.com", password: "user123" }
      ]);
    });
};
