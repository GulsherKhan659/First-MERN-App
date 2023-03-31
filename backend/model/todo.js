const moongose = require('mongoose')


const ToDoModel = moongose.Schema({
    title: String,
    description: String,
    date: Date
})


exports.ToDoModel = moongose.model('ToDo', ToDoModel)