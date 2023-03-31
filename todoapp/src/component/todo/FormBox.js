import React, { useContext, useState } from 'react'
import ToDoContext from '../../datahandle/todoContext'

function FormBox() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState(Date.now())

    const { postHandle } = useContext(ToDoContext)

    const formSubmitHandle = (event) => {
        event.preventDefault()
        const data = {
            title,
            description,
            date
        }
        postHandle(data)

    }
    return (
        <>

            <div className='row'>
                <div className='col-md-4 offset-4'>
                    <form method='post' action='#' onSubmit={e => formSubmitHandle(e)}>
                        <div className='mx-3 my-1 form-group'>
                            <label className='my-1 h6'>Title</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} type='text' className='form-control' placeholder='Write ToDo Title' />
                        </div>
                        <div className='mx-3 my-1 form-group'>
                            <label className='my-1 h6'>Description</label>
                            <textarea rows={10} value={description} onChange={e => setDescription(e.target.value)} type='text' className='form-control' placeholder='Write ToDo Description' ></textarea>
                        </div>
                        <div className='mx-3 my-1 form-group'>
                            <label className='my-1 h6'>Date</label>
                            <input value={date} onChange={e => setDate(e.target.value)} type='date' className='form-control' />
                        </div>
                        <div className='mx-3 my-2 form-group'>
                            <button className='form-control btn btn-primary'>Add To Do</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormBox