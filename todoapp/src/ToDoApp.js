import React, { useContext } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import FormBox from './component/todo/FormBox'
import CardBox from './component/todo/CardBox'
import ToDoContext from './datahandle/todoContext'

function ToDoApp() {

    const todoCxt = useContext(ToDoContext)
    const AllTODOs = () => todoCxt.allToDo.map((ToDo, idx) => <CardBox key={idx} id={ToDo._id} delRec={todoCxt.deleteHandle} uptRec={todoCxt.updateHandle} editDate={ToDo.date} editTitle={ToDo.title} editDesc={ToDo.description} />)
    return (
        <> <Header />
            <div className='container'>

                <FormBox />

                <div className='col-md-12 mt-5 p-4 text-center bg-dark text-white'>
                    MY TO DO LIST
                </div>
                <div className='row'>
                    <AllTODOs />
                </div>

            </div>
            <Footer />

        </>
    )
}

export default ToDoApp