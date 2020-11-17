const express = require('express');
const router = express.Router();
const Blog = require('./../models/Blog');

router.route('/').get(async(req, res) => {
    // const { title, body, author, comments } = req.body
    const blogs = await Blog.find();
    res.json(blogs);
})

module.exports = router;