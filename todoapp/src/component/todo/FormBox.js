import React from 'react'

function FormBox() {
    return (
        <>

            <div className='row'>
                <div className='col-md-4 offset-4'>
                    <form>
                        <div className='mx-3 my-1 form-group'>
                            <label>Title</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='mx-3 my-1 form-group'>
                            <label>Description</label>
                            <input type='text' className='form-control' />
                        </div>
                        <div className='mx-3 my-1 form-group'>
                            <label>Date</label>
                            <input type='date' className='form-control' />
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