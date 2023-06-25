const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

// Schema for the user
const userSchema = new Schema({
    // setting trim = true to ensure no whitespace
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    username: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next) {
    // 'this' is the user document
    if (!this.isModified('password')) return next();
    // Replace the password with the computed hash
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
  });

const User = mongoose.model('User', userSchema);

module.exports = User;