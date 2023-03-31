const Model = require('../model/todo')

exports.getAllToDo = async (req, res) => {
    try {
        const ToDo = await Model.ToDoModel.find()

        console.log(ToDo)


    } catch (error) {
        console.log('error', error)


    }

    res.send("get")
}

exports.addToDo = async (req, res) => {
    try {
        const ToDo = await Model.ToDoModel(req.body)
        ToDo.save()
        console.log(req.body)


    } catch (error) {
        console.log('error', error)


    }

    res.send("add")
}
exports.deleteToDo = async (req, res) => {


    try {
        const ToDo = await Model.ToDoModel.findByIdAndDelete(req.params.id)

        console.log(ToDo)


    } catch (error) {
        console.log('error', error)


    }
    res.send(req.params.id)
}
exports.updateToDo = async (req, res) => {
    try {
        const ToDo = await Model.ToDoModel.findByIdAndUpdate(req.params.id, req.body)
        console.log(req.body)

        console.log(ToDo)



    } catch (error) {
        console.log('error', error)


    }
    res.send("update")
}