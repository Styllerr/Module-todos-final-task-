const { Router } = require('express');
const { async } = require('regenerator-runtime');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const router = Router();

router.post(
    '/signup',
    [
        body('email', 'Invalid address').isEmail(),
        body('password', 'Min 6 letter').isLength({ min: 6 })
    ],
    async (request, response) => {
        try {
            const errors = validationResult(request);

            if (!errors.isEmpty()) {
                return response.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data for registration'
                })
            }
            const { userName, email, password, rePassword } = request.body;
            const guestEmail = await User.findOne({ email });

            if (guestEmail) {
                return response.status(400).json({ message: "User's E-mail already exists" })
            } else if (password !== rePassword) {
                return response.status(400).json({ message: 'Comfirm password' })
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ userName, email, password: hashedPassword });
            console.log(user);
            await user.save();

            response.status(201).json({ message: 'New user created' });

        } catch (error) {
            response.status(500).json({ message: `Try again.` })
        }
    })
router.post(
    '/signin',
    [
        body('email', 'Invalid address').normalizeEmail().isEmail(),
        body('password', 'Enter password').exists()
    ],
    async (request, response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect data for login'
                })
            }
            const { email, password } = request.body;
            const user = await User.findOne({ email });

            if (!user) {
                return response.status(400).json({ message: 'User is not found' })
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return response.status(400).json({ message: 'Password incorrect. Try again' })
            }
            const token = jwt.sign(
                { userId: user._id },
                config.get('jwtWord'),
                { expiresIn: '1h' }
            )
            response.status(200).json({ token, user: user.userName, id: user._id })

        } catch (error) {
            response.status(500).json({ message: 'Try again' })
        }
    })

module.exports = router;