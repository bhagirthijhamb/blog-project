const express = require('express');
const router = express.Router();
const Blog = require('./../models/Blog');

router.route('/').get(async(req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
})

router.route('/add').post(async(req, res) => {
    const { title, body, author, comments } = req.body
    const blog = new Blog({
        title,
        body,
        author
    });
    
    const doc = await blog.save();
    res.json(doc);
})

module.exports = router;