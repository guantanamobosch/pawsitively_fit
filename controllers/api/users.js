const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        res.status(400).json(err);
    }
}

function createJWT(user) {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

// exports
module.exports = {
    create,
};
