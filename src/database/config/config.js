require('dotenv').config()

module.exports = {
    "development": {
      "username": "root",
      "password": '',
      "database": "ronin",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }

  // module.exports = {
  

  //   "username": process.env.DB_USERNAME,
  //   "password": process.env.DB_PASSWORD,
  //   "database": process.env.DB_DATABASE,
  //   "host": process.env.DB_HOST,
  //   "port": process.env.DB_PORT,
  //   "dialect": process.env.DB_DIALECT,

  //   seederStorage: "sequelize",
  //   seederStorageTableName: "seeds",

  //   migrationStorage: "sequelize",
  //   migrationStorageTableName: "migrations"


  // }