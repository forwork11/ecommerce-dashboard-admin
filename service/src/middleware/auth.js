const jwt = require('jsonwebtoken');

const verifyAuth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(403).send("A token is required for authentication!");
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('invalid_token');
    }
    return next();
};

module.exports = verifyAuth;