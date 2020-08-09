const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema for todo which contains text, isCompleted and createdAt
const TodoSchema = new Schema({
    text: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
})

module.exports = Todo = mongoose.model('todos', TodoSchema)