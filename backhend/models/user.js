// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);s