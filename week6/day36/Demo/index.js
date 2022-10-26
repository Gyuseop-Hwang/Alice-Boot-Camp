const express = require("express");
const { Router } = require('express');
const usersRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const setUser = require("./middlewares/set-user");
// const adjuerQuery = require("./middlewares/adjust-query");

const app = express();
// const router = express().router;

// app.use(adjuerQuery);



app.get("/", (req, res) => {
  res.send("OK");
});

const test = (req, res, next) => {
  console.log(req.originalUrl)
  next()
}
// app.use("/users", setUser(), usersRouter);
app.use('/users', setUser, usersRouter);
app.use("/admin", setUser, adminRouter);



app.listen(8080, () => {
  console.log("Listening on port 8080")
});