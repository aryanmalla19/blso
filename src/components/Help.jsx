import React from 'react'
import CustomBox from './CustomBox'

function Help() {
    return (
        <div className='flex font-poppins flex-col my-10 w-10/12 mx-auto'>
            <div className='flex justify-between mb-10'>
                <div className='flex mr-10 w-6/12 flex-col'>
                    <h1 className='text-xl font-medium font-lato'>Help First</h1>
                    <h1 className='text-2xl text-second font-medium my-2'>Let's Help Together</h1>
                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum corporis quisquam debitis nostrum voluptate, id consectetur ipsa sed beatae vitae sapiente est voluptatibus corrupti ratione assumenda ab laboriosam minima!</p>
                    <div>
                    <CustomBox name="Call :   +977 9476423764" />
                    </div>
                </div>
                <div className='w-6/12'>
                    <img src='https://www.blsonepal.org.np/uploads/medium/earthquick-p0ZnHNYM8SFdjAjIU9aKM2xilLT4DvmjkPfA5KHt.jpg' alt="" />
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='w-6/12 mr-10'>
                    <img src='https://www.blsonepal.org.np/uploads/medium/earthquick-p0ZnHNYM8SFdjAjIU9aKM2xilLT4DvmjkPfA5KHt.jpg' alt="" />
                </div>
                <div className='flex w-6/12 flex-col'>
                    <h1 className='text-2xl text-second font-medium my-2'>More People More impact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorum corporis quisquam debitis nostrum voluptate, id consectetur ipsa sed beatae vitae sapiente est voluptatibus corrupti ratione assumenda ab laboriosam minima!</p>
                </div>
            </div>
        </div>
    )
}

export default Help