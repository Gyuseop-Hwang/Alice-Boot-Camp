const jwt = require('jsonwebtoken');

const secret = 'elice';

exports.secret = secret;

exports.setUserToken = (res, user) => {
  const token = jwt.sign(user, secret)
  // 유저 jwt 토큰생성
  // 토큰을 쿠키로 전달
  res.cookie('token', token)
}