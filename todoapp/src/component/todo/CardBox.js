import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
function CardBox() {
    const [isEdit, setIsEdit] = useState(false)

    const editRecord = () => {
        setIsEdit(true)
    }

    const saveRecord = () => {
        setIsEdit(false)
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
                        <input type='text' className='form-control' />
                    </div>
                    <div className='mx-3 my-1 form-group'>
                        <label className='p-1'>Description</label>
                        <input type='text' className='form-control' />
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
                                <div className='bd-highlight'>
                                    Date : 11/2/2013
                                </div>
                                <div className='bd-highlight' >
                                    <i class="bi bi-trash text-danger fs-5  btn px-2" />
                                    <i class="bi bi-pencil-square text-warning btn fs-5  px-2" onClick={() => editRecord()}></i>
                                </div>
                            </div>
                            <hr />
                            <div className='card-title'>Title</div>
                            <hr />
                            <p>Description</p>
                            <p>3/3/2</p>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default CardBox