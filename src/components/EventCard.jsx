import React from 'react'
import { Link } from 'react-router-dom'

function EventCard({img,title,message,link}) {
  return (
    <div className='w-full sm:w-[48%] lg:w-[30%] hover:bg-second group border border-black rounded cursor-pointer hover:translate-y-[-1px] transition-all duration-300 mb-16 font-poppins flex flex-col'>
        <Link to={link}>
        <img className='w-full' src={img} alt="" />
        <div className='w-11/12 group-hover:text-white  mx-auto'>
        <p className='py-2 text-sm lg:text-base border-b group-hover:border-white border-black'>Organized By : BLSO Nepal</p>
        <h1 className='text-base lg:text-xl mt-2 group-hover:text-white font-medium'>{title}</h1>
        <p className='my-1 lg:text-base text-sm'>{message}</p>
        </div>
        </Link>
    </div>
  )
}

export default EventCard