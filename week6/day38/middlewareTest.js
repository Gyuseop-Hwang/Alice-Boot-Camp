const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use((req, res, next) => {
  console.log("global middleware 1");
  next();
})

// app.use('/api', (req, res, next) => {
//   console.log("api path middleware")
//   next()
// })

app.get('/api', (req, res, next) => {
  console.log("api path get")
  // next();
  throw new Error('비동기 err 오류처리 핸들러에 전달')
})

app.get('/api/coffees', (req, res, next) => {
  console.log("get coffees");
  res.send("coffees");
})

app.get('/home', (req, res, next) => {
  console.log("home #1")
  next();
}, (req, res, next) => {
  console.log("home #2")
  next(new Error('Something went wrong'))
})

app.get('/api', (req, res, next) => {
  console.log("api path get")
  res.send("test")
  next();
})

app.use((req, res, next) => {
  console.log("global middleware 2");
  next(new Error("Not found"))
})

app.use((err, req, res, next) => {
  console.log('Error handle called');
  res.status(500).json({ error: err.message })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})