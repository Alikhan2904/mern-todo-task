const express = require('express');
const todos = express.Router();
const cors = require('cors');

const Todo = require('../models/Todo');
todos.use(cors());


todos.post('/create', async (req, res, next) => {
    const { text } = req.body;
    try {
        const newTodo = Todo({
            text
        });
        await newTodo.save();
        return res.json(newTodo);
    } catch (err) {
        console.log(err);
    }
});

todos.get('/getAll', async (req, res, next) => {
    try {
        const todos = await Todo.find();
        return res.json(todos);
    } catch (err) {
        console.log(err);
    }
});

todos.post('/delete/:todoId', async (req, res, next) => {
    try {
        const todoToRemove = await  Todo.findById(req.params.todoId);
        await Todo.deleteOne(todoToRemove);
        return res.json({ todoId: req.params.todoId });
    } catch (err) {
        console.log(err);
    }
});

todos.post('/complete/:todoId', async (req, res, next) => {
    try {
        const todo = await  Todo.findById(req.params.todoId);
        todo.isCompleted = !todo.isCompleted;
        await todo.save();
        return res.json({ todoId: req.params.todoId });
    } catch (err) {
        console.log(err);
    }
});

module.exports = todos;