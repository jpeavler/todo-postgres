const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const pool = require("./db");

app.use(cors());
app.use(express.json());

const todoRouter = require("./routes/api/todo");
app.use('/api/todo', todoRouter);

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});