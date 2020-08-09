const express = require('express');
const todos = express.Router();
const cors = require('cors');

const Todo = require('../models/Todo');
todos.use(cors());

// logic for creating a new todo
todos.post('/create', async (req, res, next) => {
    // takes out text parameter from request body using destructuring
    const { text } = req.body;
    try {
        // creates a new todo and save in database
        const newTodo = Todo({
            text
        });
        await newTodo.save();
        return res.json(newTodo);
    } catch (err) {
        // throws error if any
        console.log(err);
    }
});

// logic for getting the list of todos 
todos.get('/getAll', async (req, res, next) => {
    try {
        const todos = await Todo.find();
        return res.json(todos);
    } catch (err) {
        console.log(err);
    }
});

// logic for deleting a todo
todos.post('/delete/:todoId', async (req, res, next) => {
    try {
        // finds todo to remove and deletes it
        const todoToRemove = await  Todo.findById(req.params.todoId);
        await Todo.deleteOne(todoToRemove);
        return res.json({ todoId: req.params.todoId });
    } catch (err) {
        console.log(err);
    }
});

// logic for marking todo as complete or incomplete
todos.post('/complete/:todoId', async (req, res, next) => {
    try {
        // finds the todo by id and toggles the isCompleted parameter
        const todo = await  Todo.findById(req.params.todoId);
        todo.isCompleted = !todo.isCompleted;
        await todo.save();
        return res.json({ todoId: req.params.todoId });
    } catch (err) {
        console.log(err);
    }
});

module.exports = todos;