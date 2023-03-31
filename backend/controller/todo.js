const Model = require('../model/todo')


exports.getAllToDo = async (req, res) => {
    try {
        const ToDo = await Model.ToDoModel.find()


        console.log(ToDo)
        res.status(200).send(ToDo)

    } catch (error) {
        console.log('error', error)
        res.status(401)


    }


}

exports.addToDo = async (req, res) => {
    try {
        const ToDo = await Model.ToDoModel(req.body)
        ToDo.save()
        console.log(req.body)

        res.status(201).send("add")

    } catch (error) {
        console.log('error', error)
        res.status(401)

    }

}
exports.deleteToDo = async (req, res) => {


    try {
        const ToDo = await Model.ToDoModel.findByIdAndDelete(req.params.id)

        console.log(ToDo)

        res.status(200).send("delete")

    } catch (error) {
        console.log('error', error)
        res.status(401)

    }

}
exports.updateToDo = async (req, res) => {
    try {
        const ToDo = await Model.ToDoModel.findByIdAndUpdate(req.params.id, req.body)
        console.log(req.body)

        console.log(ToDo)
        res.status(201).send("Edit")




    } catch (error) {
        console.log('error', error)
        res.status(401)

    }
}