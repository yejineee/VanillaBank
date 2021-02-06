const jwt = require('jsonwebtoken');
const { jwtConfig } = require('@config');

module.exports = {
  createToken: async ({ id }) => {
    const payload = { id };
    const option = { expiresIn: jwtConfig.expTime };
    return new Promise((resolve, reject) => {
      jwt.sign(payload, jwtConfig.secret, option, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });
  },
};
