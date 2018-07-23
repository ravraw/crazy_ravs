require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      user: "",
      password: "",
      database: process.env.DB_NAME,
      port: process.env.DB_PORT
      //   ssl: process.env.DB_SSL
    },
    migrations: {
      directory: "./db/migrations",
      tableName: "migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL + "?ssl=true",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations"
    }
  }
};

// var environment = process.env.NODE_ENV || "development";
// var config = options[environment];
// module.exports = require("knex")(config);
