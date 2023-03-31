import React, { useState } from 'react'
import dateFormat from "dateformat";

import 'bootstrap-icons/font/bootstrap-icons.css';
function CardBox({ id, editTitle, editDesc, editDate, delRec, uptRec }) {
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(editTitle)
    const [description, setDesc] = useState(editDesc)

    const day = dateFormat(editDate, "dddd,-dS mmmm , yyyy").toString().split('-')[0].replace(',', '')
    const date = dateFormat(editDate, "dddd,-dS mmmm , yyyy").toString().split('-')[1]
    const editRecord = () => {
        setIsEdit(true)
    }

    const saveRecord = () => {
        const data = {
            title, description
        }
        uptRec(id, data)

        setIsEdit(false)
    }

    const deleteRecord = () => {
        delRec(id)

    }
    return (
        <>
            {isEdit ? <div className='col-md-3 mx-1 my-3'>
                <div className='bg-dark text-white'>
                    <div className='fs-5 px-4 py-2'>
                        Edit ToDo
                    </div>
                    <hr />
                    <div className='mx-3 my-1 form-group'>
                        <label className='p-1'>Title</label>
                        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='form-control' />
                    </div>
                    <div className='mx-3 my-1 form-group'>
                        <label className='p-1'>Description</label>
                        <textarea rows={5} type='text' value={description} onChange={(e) => setDesc(e.target.value)} className='form-control' ></textarea>
                    </div>
                    <div className='mx-3 my-1 form-group'>
                        <button className='btn btn-primary text-center form-control my-3' onClick={() => saveRecord()}>Save</button>
                    </div>
                </div>

            </div>
                : <div className='col-md-3 mx-1 my-3'>

                    <div className='card bg-dark text-white'>
                        <div className='card-body'>
                            <div className='d-flex  bd-highlight justify-content-between'>
                                <div className='bd-highlight fs-6'>
                                    <div className='fs-6'>{day}</div>
                                    <div className='fs-7'><b><small>{date}</small></b></div>


                                </div>
                                <div className='bd-highlight' >
                                    <i className="bi bi-trash text-danger fs-5  btn px-2" onClick={() => deleteRecord()} />
                                    <i className="bi bi-pencil-square text-warning btn fs-5  px-2" onClick={() => editRecord()}></i>
                                </div>
                            </div>
                            <hr />
                            <div className='card-title'>{editTitle}</div>
                            <hr />
                            <p>{editDesc}</p>

                        </div>
                    </div>
                </div>}
        </>
    )
}

export default CardBox