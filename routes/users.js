require('dotenv').config();
const express = require('express')
const router = express.Router()
const { User } = require('../models')
const jwt = require('jsonwebtoken');

router.post("/signup", async (req, res) => {
    const { firstName, lastName, username, email, password, wantsVerified } = req.body;

    try {
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
            role: 'normal',
            wantsVerified: wantsVerified,
        });
        res.status(201).json(user);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ message: 'Email already in use.' });
        }
        res.status(500).json({ error: error.message });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    try {
        const user = await User.findOne({ where: { username: username } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        if (password != user.password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user.id, email: user.email }, 'traveller', {
            expiresIn: '1h',
        });
        console.log(user);

        res.status(200).json({
            message: 'User signed in successfully',
            token: token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/getUsers', async (req, res) => {
    try {
        const users = await User.findAll();
        const usersTransformed = users.map(user => {
            return {
                ...user.dataValues,
                wantsVerified: user.wantsVerified == 1 ? 'true' : 'false'
            };
        });
        res.status(200).json(usersTransformed);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/getUser', async (req, res) => {
    const userId = req.query.userId;
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: 'No user found with this ID.' });
        }

        user.wantsVerified = user.wantsVerified == 1 ? 'True' : 'False';

        res.status(200).json({
            user: user,
        });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Error fetching user' });
    }
});

router.patch('/updateUser', async (req, res) => {
    const { firstName, lastName, username, email, role } = req.body;
    try {
        const user = await User.findByPk(req.query.userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.username = username || user.username;
        user.email = email || user.email;
        user.role = role || user.role;

        await user.save();

        res.status(200).json({
            message: 'User updated successfully',
            user: user,
        });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user' });
    }
});


module.exports = router;