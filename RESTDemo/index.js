const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/tacos', (req, res) => {
    res.send("Get/ Dumpak")
})

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;

    console.log(`${meat} ${qty}`);
    res.send("Post/ tacos")
})

app.listen(3000, () => {
    console.log("Started at port 3000")
})