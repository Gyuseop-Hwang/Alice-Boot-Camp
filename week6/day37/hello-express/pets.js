const { Router } = require('express');

const router = Router({ mergeParams: true });

/* GET 라우팅 추가 */
// users/:userId/pets => petsRouter의 get 요청으로 연결
router.get('/', (req, res) => {
  const userId = req.params.userId
  res.send(`Pets of user ${userId}`)
})

module.exports = router;