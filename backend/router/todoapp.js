const express = require('express')

const route = express.Router()

const controller = require('../controller/todo')

route.get('/', controller.getAllToDo)

route.post('/', controller.addToDo)

route.delete('/:id', controller.deleteToDo)

route.patch('/:id', controller.updateToDo)

exports.ToAppRoute = route
