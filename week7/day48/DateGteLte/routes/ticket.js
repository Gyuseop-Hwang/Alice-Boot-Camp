// 지시사항을 참고하여 코드를 완성하세요.
const { Router } = require('express');

const { Ticket } = require('../models');

const router = Router();


router.get('/', async (req, res, next) => {
  const { airline, year } = req.query;
  const start_date = new Date(year, 0, 1)
  const end_date = new Date(year, 11, 31)
  const tickets = await Ticket.find({ airline, date: { $gte: start_date, $lte: end_date } })
  res.json(tickets)
})

module.exports = router;