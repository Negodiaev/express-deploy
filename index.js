const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to server!' });
});

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello from Express!' });
});

app.listen(5000, () => {
    console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;