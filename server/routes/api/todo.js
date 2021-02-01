const express = require('express'); //use express as our server engine
const pool = require('../../db');   //Allows us to talk to our database
const router = express.Router();    //Allows us to setup different routes

//Get all todos
router.get("/", async(req, res) => {    //req represents the request and res represents the result to send out
    try {
        const allTodos = await pool.query("SELECT * FROM todo");    //pool.query allows us to use postgres commands to talk to database
        res.json(allTodos.rows);    //Return the requested todo list in an array of JSON objects
    } catch (error) {   //in case pool.query fails, console log the error
        console.error(err.message);
    }
});

//Get one todo by its todo_id
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;  //pulls the id out from the request URI
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);   //WHERE operator returns all values that match following condition
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(err.message);
    }
});

//Post a new todo to the database
router.post("/", async(req, res) => {   //async-await allows us to wait for the data to come
    try {
        const { description } = req.body;   //pull out the description value out of req.body
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",    //($1) corresponds to the first value in the array below
            [description]   //($1) is given the value of description here
        );
        res.json(newTodo.rows[0]);  //Since newTodo gets extra data than we want, we request to get the first value in rows
    } catch(err) {
        console.error(err.message);
    }
});


module.exports = router;