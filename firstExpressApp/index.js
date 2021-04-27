const express = require('express');

const app = express();

// < !--app.use((req, res) => {
//     console.log("We Got a New Request");
//     res.send("Hello, We Got you request!");
// }) -->

app.get('/cats', (req, res) => {
    res.send("CAT RESULLLTTT")
})

app.get('/dogs', (req, res) => {
    res.send("Woooooof");
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
}
)