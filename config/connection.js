const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         port: process.env.PORT || 3306,
//         pool: {
//             max: 15,
//             min: 5, 
//             idle: 20000,
//             evict: 15000,
//             acquire: 30000, 
//         }
//     }
// );


if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    );
  }

module.exports = sequelize;