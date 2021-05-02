const express = require("express");
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'That is so funny'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysaywoof',
        comment: 'woof wooof woof'
    }
];

app.get('/tacos', (req, res) => {
    res.send("Get/ Dumpak")
})

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;

    console.log(`${meat} ${qty}`);
    res.send("Post/ tacos")
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    let newComment = { username, comment };
    comments.push(newComment);
    res.redirect('/comments')
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
app.listen(3000, () => {
    console.log("Started at port 3000")
})