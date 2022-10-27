const jwt = require('jsonwebtoken');
const Token = require("../models/Token");
const User = require("../models/User")

module.exports = {
    post: (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).send("Require Inputs");
            }
            User.findOne({ email }, (err, user) => {
                if (err) {
                    return res.status(500).send();
                }
                if (!user) return res.status(400).send("No such user!");
                user.comparePassword(password, user.password, function(err, isMatch) {
                    if (err) {
                        return res.status(401).send();
                    }
                    if (!isMatch) {
                        return res.status(401).send('Invalid Password');
                    }
                    const newToken = jwt.sign(
                        { user_id: user._id, email },
                        process.env.TOKEN_KEY,
                        {
                            expiresIn: "1d"
                        }
                    );
                    const token = new Token({
                        token: newToken,
                        userAgent: req.headers["user-agent"],
                        ipAddress: req.ip,
                        user: user
                    })
                    token.save()
                    .then(result => res.status(200).json({
                        name: user.name,
                        email: user.email,
                        auth: {
                            token: result.token
                        }
                    }))
                    .catch(err => {
                        console.log(err)
                        res.status(500).json(err);
                    })
                })
            });
        } catch (err) {
            res.status(401).send();
        }
    }
}