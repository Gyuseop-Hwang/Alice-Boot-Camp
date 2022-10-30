const { Router } = require('express');
const passport = require('passport');
const { setUserToken } = require('../utils/jwt');
const jwt = require('jsonwebtoken')
const router = Router();
const secret = 'elice';

// 세션 비활성화

// router.post('/', passport.authenticate('local', {session : false}), (req, res, next) => {
//   // 유저 토큰 생성 및 쿠키에 전달하기
//   console.log(req.user)
//   setUserToken(res, req.user)

//   res.redirect('/');
// });

router.post('/', (req, res, next) => {
  passport.authenticate('local', { session: false }, (authErr, user) => {
    if (authErr) {
      next(authErr)
    }
    console.log(user)
    const token = jwt.sign(user, secret);
    res.cookie('token', token)
    res.redirect('/')
  })(req, res, next)
})

module.exports = router;