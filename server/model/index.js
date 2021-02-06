'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./table/user')(sequelize, Sequelize);
db.Category = require('./table/category')(sequelize, Sequelize);
db.Method = require('./table/method')(sequelize, Sequelize);
db.Payment = require('./table/payment')(sequelize, Sequelize);

db.User.hasMany(db.Method, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
db.User.hasMany(db.Payment, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
db.Category.hasMany(db.Payment, {
  foreignKey: {
    name: 'categoryId',
    allowNull: false,
  },
});
db.Method.hasMany(db.Payment, {
  foreignKey: {
    name: 'methodId',
    allowNull: false,
  },
});

module.exports = db;
