const express = require('express');
const hbs = require("hbs");
const path = require("path");
const app = express();


const port = process.env.PORT || 3000


app.get('', (req, res) => {
    res.send("Hi this is a weather app");
})
app.get('/weather', (req, res) => {
    res.send("This is weather endpoint.")
})
app.get("*", (req, res) => {
    res.send("Page not found.")
})
app.listen(port, () => {
    console.log("Server is up and running on port: ", port);
})