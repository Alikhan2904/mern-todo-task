const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TodoSchema = new Schema({
    text: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    // user:[
    //     {type: Schema.Types.ObjectId, ref: 'users'}
    //   ]
})

module.exports = Todo = mongoose.model('todos', TodoSchema)