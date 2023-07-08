'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { DataTypes } = Sequelize; // Import DataTypes separately
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.json'))[env]; // Corrected this line
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  // .forEach(file => {
  //   const model = require(path.join(__dirname, file))(sequelize, DataTypes); // Pass DataTypes instead of Sequelize.DataTypes
  //   db[model.name] = model;
  // });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

const User = require('./User')(sequelize, DataTypes);
db.User = User;

const Disease = require('./Disease')(sequelize, DataTypes);
db.Disease = Disease;

module.exports = db;
