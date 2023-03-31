import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import FormBox from './component/todo/FormBox'
import CardBox from './component/todo/CardBox'

function ToDoApp() {
    return (
        <> <Header />
            <div className='container'>

                <FormBox />

                <div className='col-md-12 mt-5 p-4 text-center bg-dark text-white'>
                    MY TO DO LIST
                </div>
                <div className='row'>
                    <CardBox />
                </div>

            </div>
            <Footer />

        </>
    )
}

export default ToDoApp