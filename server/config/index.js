require('dotenv').config();
const env = process.env;
module.exports = {
  jwtConfig: {
    secret: env.SECRET,
    expTime: env.TOKEN_EXP,
  },
  development: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
    pool: { max: 10, min: 0, idle: 5000 },
  },
  production: {
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
  },
};
