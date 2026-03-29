// routes/auth.js
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// REGISTER
router.post("/register", async (req, res) => {
    const hash = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        email: req.body.email,
        password: hash
    });

    await user.save();
    res.json(user);
});

// LOGIN
router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(400).send("User not found");

    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(400).send("Wrong password");

    const token = jwt.sign({ id: user._id }, "secretkey");

    res.json({ token, user });
});

module.exports = router;