const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

// Register a new admin user
exports.register = async (req, res) => {
    const { name, email, username, password } = req.body;
    try {
        const user = await User.create({ name, email, username, password });
        res.status(201).json({ message: 'Admin registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login an existing user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};