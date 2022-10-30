const { Router } = require('express');
const passport = require('passport');

const router = Router();

// passport local 로 authenticate 하기
router.post('/', (req, res, next) => {
  passport.authenticate(
    'local',
    { keepSessioninfo: true },
    (authError, user, info) => {
      if (authError || !user) {
        return next(authError);
      }
      req.login(user, loginError => {
        if (loginError) {
          next(loginError);
        }
        res.redirect('/');
      });
    }
  )(req, res, next);
});

// router.post('/', passport.authenticate('local'), (req, res, next) => {
//   res.redirect('/');
// });

module.exports = router;
