import React, { useContext, useState } from 'react'
import ToDoContext from '../../datahandle/todoContext'

import 'bootstrap-icons/font/bootstrap-icons.css';

function FormBox() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(Date.now())
    const [isAlert, setIsAlert] = useState(false)

    const { postHandle } = useContext(ToDoContext)

    const isEmpty = (e) => {
        if (e === '' || e === undefined || e.length === 0) {
            return true
        } else {
            return false
        }



    }

    const formSubmitHandle = (event) => {
        event.preventDefault()
        if (isEmpty(title) || isEmpty(description)) {
            setIsAlert(true)

        } else {
            setIsAlert(false)

            const data = {
                title,
                description,
                date
            }

            postHandle(data)
            alert("ADD Sucessfully")
        }

    }


    return (
        <>
            {isAlert ? <div className=" alert alert-danger  position-fixed start-50 translate-middle" style={{ top: '5%', width: '30%' }} role="alert">
                <div className='row'>
                    <div className='col-md-1'><i class="bi bi-exclamation-triangle"></i></div>
                    <div className='col-md-10'>Alert! Please Fill All Field</div>
                    <div className='col-md-1'><i onClick={() => setIsAlert(false)} class="bi bi-x-square-fill"></i></div>


                </div>
            </div> : <></>}


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

                            <div className='d-flex flex-row-reverse '><small>Words : <b className='text-primary'>{description.length}</b> <b>|</b> Sentence : <b className='text-primary'>{description.split(" ").length - 1}</b></small></div>
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