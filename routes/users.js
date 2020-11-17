const express = require('express');
const router = express.Router();
const User = require('./../models/User');

router.route('/').get( async(req, res) => {
    const users = await User.find();
    res.json(users);
})

router.post('/add', async(req, res) => {
    console.log(req.body)
    const { firstName, lastName } = req.body;
    const newUser = new User({
        firstName,
        lastName
    })

    const user = await newUser.save();

    res.json(user);
})

module.exports = router;