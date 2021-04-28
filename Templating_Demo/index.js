const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render("home");
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render("random", { rand: num })
})

app.listen(3000, () => {
    console.log("LISTENING ON PART 3000")
})