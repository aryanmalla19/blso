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
                    <CustomBox name="Call :   +977 9851091049" />
                    </div>
                </div>
                <div className='w-6/12'>
                    <img src='https://i.pinimg.com/564x/31/a4/9e/31a49e16fe7c3a62dbac8a831b95cdbe.jpg' alt="" />
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='w-6/12 mr-10'>
                    <img src='https://i.pinimg.com/564x/df/34/bd/df34bd5438de6a9cca99dd9c8d21fbf2.jpg' alt="" />
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