const express = require("express");
const { Router } = require('express');
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const setUser = require("./middlewares/set-user");
// const adjuerQuery = require("./middlewares/adjust-query");

const app = express();
// const router = express().router;
const router = Router();
// app.use(adjuerQuery);

const test1 = (req, res, next) => {
  console.log("use");
  next();
}

const test2 = (req, res, next) => {
  res.send('router');
}

app.get("/", (req, res) => {
  res.send("OK");
});

// app.use("/users", setUser(), usersRouter);
app.use('/users', setUser(), usersRouter);
app.use("/admin", setUser("admin"), adminRouter);

app.use('/user', test1);
router.get('/name', test2)

app.listen(8080, () => {
  console.log("Listening on port 8080")
});