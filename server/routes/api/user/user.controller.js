const userModel = require('@model/user');
const jwt = require('@service/jwt');
const passport = require('passport');

module.exports = {
  login: async (req, res, next) => {
    try {
      passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
          res.send(400).json(info);
        }
        req.login(user, { session: false }, async err => {
          if (err) {
            res.send(400).json({ err });
          }
          const token = await jwt.createToken(user);
          res.cookie('user', token, { httpOnly: true });
          return res.status(200).json({ auth: true });
        });
      })(req, res);
    } catch (err) {
      return res.sendStatus(401);
    }
  },
};
