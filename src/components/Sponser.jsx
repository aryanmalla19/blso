import React from 'react'
import CustomBox from './CustomBox'

function Sponser({ img, location, message, age, name }) {
    return (
        <div className='flex pb-4 bg-wow flex-col'>
            <h1 className='text-xl lg:text-4xl text-second mt-6 text-center'>SPONSOR A CHILD</h1>
            <h1 className='lg:hidden text-2xl lg:text-3xl text-center mb-0 pt-4 block'>Meet {name}</h1>

            <div className='flex lg:flex-row flex-col w-11/12 mx-auto mt-3 lg:my-5'>
                <div className='lg:w-[25%] justify-center items-center flex flex-col'>
                    <div className='flex justify-start'>
                        <img className='w-10/12 mx-auto' src={img} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h6>Location: {location}</h6>
                        <p>Age: {age}</p>
                    </div>
                </div>
                <div className='lg:w-8/12 flex flex-col'>
                    <h1 className='hidden lg:block'>Meet {name}</h1>
                    {message.slice(0, 1).map((e) => {
                        return (
                            <p key={e.id}>{e.saying}</p>
                        )
                    })}


                    <CustomBox name="Donate Now" link="/donation" />
                </div>
            </div>
        </div>
    )
}

export default Sponser