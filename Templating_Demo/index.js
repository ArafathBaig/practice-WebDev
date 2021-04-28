const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render("home");
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie'];
    res.render('cats', { cats });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render("subreddit", { subreddit });
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render("random", { rand: num })
})

app.listen(3000, () => {
    console.log("LISTENING ON PART 3000")
})