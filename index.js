const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { PORT } = require('./config');

//** Create express app */
const app = express();

//** CORS */
app.use(cors());

//** Parse application */
app.use(bodyParser.urlencoded({ extended: true }));

//** Parse application/json */
app.use(bodyParser.json());

//** Define a sample route */
app.get("/", (req, res) => {
    res.json({ message: "Welcome to node application." });
});

//** Listen for requests */
app.listen(3000, () => {
    console.log("Server is listening on port " + 3000);
});