const express = require('express');
const router = express.Router();
const Blog = require('./../models/Blog');
const User = require('./../models/User');

router.route('/').get(async(req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
})

router.route('/add').post(async(req, res) => {
    const { title, body, author, comments } = req.body
    const blog = new Blog({
        title,
        body,
        author,

    });
    
    const doc = await blog.save();
    res.json(doc);
})

router.route('/add/:blogId').post(async(req, res) => {
    const { blogId } = req.params;
    const { name } = req.body;

    const blog = await Blog.findById(blogId);
    const user = await User.findOne({ name: name });
    console.log(blog, user)
    
    user.blogs.push(blog.title);
    const updatedUser = await user.save();

    blog.users.push(user.name)
    const updatedBlog = await blog.save();

    res.json({
        updatedBlog, updatedUser
    })
})

module.exports = router;