
const express = require('express');

const app = express();

const router = express.Router();


// const auth = (req, res, next) => {
//   console.log('2. auth 미들웨어에서 인증 완료')
//   next();
// }

// router.use(auth) // router 전체에 대해 권한부여

// // 원 router에서 router.get('/...', auth, (req, res, next))
// // router에서 get에만 권한부여. => 종류별로 권한부여 가능

// router.get('/', (req, res, next) => {
//   console.log(req.path, req.method)
//   console.log("3. 최종 응답")
//   res.send('Hello Router')
// })

// app.use((req, res, next) => {
//   console.log('1. global middleware')
//   next();
// })

// app.use('/admin', router)

router.get('/data/test', (req, res) => {
  console.log('test')
  res.send("test")
})

app.use('/this', router)

app.listen(3000, () => {
  console.log('listening on port 3000')
})