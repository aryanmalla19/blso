import React from 'react'
import CustomBox from './CustomBox'

function Sponser({img,location,message,age,name}) {
    return (
        <div className='flex bg-wow flex-col'>
            <h1 className='text-xl lg:text-4xl text-second mt-6 text-center'>SPONSOR A CHILD</h1>
            <div className='flex w-11/12 mx-auto my-5'>
                <div className='w-[25%] flex flex-col'>
                    <div className='flex justify-start'>
                    <img className='w-10/12' src={img} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <h6>Location: {location}</h6>
                        <p>Age: {age}</p>
                    </div>
                </div>
                <div className='w-8/12 flex flex-col'>
                    <h1>Meet {name}</h1>
                    {message.map((e)=>{
                        return(
                            <p>{e.saying}</p>
                        )
                    })}
                    <CustomBox name="Donate Now" link="/donation" />
                </div>
            </div>
        </div>
    )
}

export default Sponser