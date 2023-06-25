const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/user");

// takes in POST request containing user sign up form data
async function create(req, res) {
    try {
        // stores a new item in the db
        const user = await User.create(req.body);

        // creates a token with user data as payload
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email }); // ❓ might be username instead
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        res.status(400).json(`Bad credentials: ${error}`);
    }
}

// takes in user data from the sign up form
function createJWT(user) {
    // creates a JSON Web Token storing user data as payload,
    // signing the token with the SECRET in the .env, and
    // setting expiration time as 24h from time of creation
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}

// exports
module.exports = {
    create,
    login,
};
