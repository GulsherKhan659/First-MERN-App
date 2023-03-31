import { useEffect, useState } from "react"
import ToDoContext from "./todoContext"
import Network from "../network/todoapi"

const ToDoState = (props) => {
    const [allToDo, setAllToDo] = useState([])

    const getHandle = () => {
        Network.get().then(r => {
            setAllToDo(r.data)
        })
    }

    const postHandle = (data) => {
        Network.post(data).then(() => {
            getHandle()
        })
    }

    const deleteHandle = (id) => {
        Network.delete(id).then(() => {
            getHandle()
        })
    }

    const updateHandle = (id, data) => {
        Network.edit(id, data).then(() => {
            getHandle()
        })
    }

    useEffect(() => {

        getHandle()

    }, [])


    return (
        <ToDoContext.Provider value={{ allToDo, getHandle, postHandle, deleteHandle, updateHandle }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export default ToDoState