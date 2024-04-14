import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function SponserOtherChild({img,message,title,category,link}) {
    return (
        <>
            <div className='w-full sm:w-[48%] lg:w-[30%] hover:bg-second group border border-black rounded cursor-pointer hover:translate-y-[-1px] transition-all duration-300 mb-16 font-poppins flex flex-col'>
                <Link to={link}>
                <img className='w-full' src={img} alt="" />
                <div className='w-11/12 group-hover:text-white pb-2 mx-auto'>
                    <h1 className='text-base lg:text-xl mt-2 group-hover:text-white font-medium'>{title}</h1>
                    <p className='my-1 lg:text-base text-sm'>Location:  {message}</p>
                    <p className='my-1 lg:text-base text-sm'>Age:  {category}</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center '>
                            <p className='mb-0 group-hover:text-white text-second font-semibold'>Learn More</p>
                        </div>
                        <Button/>
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}

export default SponserOtherChild