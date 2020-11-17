const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/users');

const PORT = 5000;
const uri = 'mongodb://localhost:27017/blog-project';

// Connect to database
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Successfuly connected to: ${uri}`)
    })
    .catch(err => {
        console.log(err.message);
    })

app.use(express.json({ extended: false }));


app.use('/users', userRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})