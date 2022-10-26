var User = require("../models/user");

const createUser = async function (req, res, next) {
    const { name, species } = req.query;
    const user = await User.create({name, species});
    if (user.error) {
        res.status(500).json({
          message: user.error
        })
    }
}

module.exports = createUser;
