const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    body: String,
    author: String,
    comments: [
        {
            body: String,
            date: Date
        }
    ],
    publishDate: {
        type: Date,
        default: Date.now
    },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    },
    users: [String]
})

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;