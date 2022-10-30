const passport = require('passport');
const LocalStrategy = require('./strategies/local');
const { User } = require('../models');

module.exports = () => {
  // local strategy 사용

  passport.serializeUser((user, callback) => {
    callback(null, user.shortId);
  });

  passport.deserializeUser(async (shortId, callback) => {
    const user = await User.findOne({ shortId })
    callback(null, user);
  });

  passport.use(LocalStrategy);
};