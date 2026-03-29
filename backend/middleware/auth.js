// middleware/auth.js
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).send("Access denied");

    const verified = jwt.verify(token, "secretkey");
    req.user = verified;
    next();
};