const express = require('express');

const app = express();

// < !--app.use((req, res) => {
//     console.log("We Got a New Request");
//     res.send("Hello, We Got you request!");
// }) -->

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1> Browsing the ${subreddit} subreddit with ${postId}`)
})

app.get('/cats', (req, res) => {
    res.send("CAT RESULLLTTT")
})

app.get('/dogs', (req, res) => {
    res.send("GOOOOOOFFFFIII");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(q);
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
}
)