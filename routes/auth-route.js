const { Router } = require('express');
const { async } = require('regenerator-runtime');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = Router();

const urlencodedParser = bodyParser.urlencoded({extended: false});

router.post('/signup', urlencodedParser, async (request, response) => {
    try {
        const { userName, email, password, rePassword } = request.body;
        const guest = await User.findOne({ userName });
        const guetsEmail = await User.findOne({ email });

        if (guest) {
            return response.status(400).json({ message: 'User already exists' })
        } else if (guetsEmail) {
            return response.status(400).json({ message: 'E-mail already exists' })
        }else if(password !== rePassword) {
            return response.status(400).json({ message: 'Comfirm password' })
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({userName, email, password: hashedPassword});
        console.log(user);

        await user.save();
        response.status(201).json({ message: 'New user created' });

    } catch (error) {
        response.status(500).json({ message: 'Try again' })
    }
})
router.post('/signin', async (req, res) => {

})

module.exports = router;