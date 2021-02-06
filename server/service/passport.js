const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const { jwtConfig } = require('@config');
const userModel = require('@model/user');

const cookieExtractor = req => {
  if (req && req.cookies) {
    return req.cookies['user'];
  }
  return undefined;
};

const passportParam = {
  usernameField: 'name',
  passwordField: 'password',
};

const passportConfig = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: jwtConfig.secret,
  passReqToCallback: true,
};

const localValidate = async (name, password, done) => {
  try {
    const user = await userModel.verify(name, password);
    if (!user) {
      return done(null, false, { message: '로그인 실패' });
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const jwtValidate = async (req, jwtPayload, done) => {
  try {
    const userId = await userModel.findUserByPk(jwtPayload);
    if (!userId) {
      return done(null, false);
    }
    req.userId = userId;
    return done(null, userId);
  } catch (err) {
    return done(err);
  }
};
module.exports = () => {
  passport.use('local', new LocalStrategy(passportParam, localValidate));
  passport.use('jwt', new JWTStrategy(passportConfig, jwtValidate));
};
