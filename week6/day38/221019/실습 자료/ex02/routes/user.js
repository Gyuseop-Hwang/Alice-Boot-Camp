var express = require("express");
var User = require("../models/user");
var router = express.Router();

router.use('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

module.exports = router;
