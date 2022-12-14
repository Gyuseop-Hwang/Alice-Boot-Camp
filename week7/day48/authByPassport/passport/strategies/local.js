const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../../models');
const hashPassword = require('../../utils/hash-password');

const config = {
  usernameField: 'email',// 'email' 필드 사용하도록 설정
  passwordField: 'password'// 'password' 필드 사용하도록 설정
};

const local = new LocalStrategy(config, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('회원을 찾을 수 없습니다.');
    }
    // 검색 한 유저의 비밀번호와 요청된 비밀번호의 해쉬값이 일치하는지 확인
    const result = hashPassword(password) === user.password
    if (!result) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = local;