import React from 'react'

function EventCard({img,title,message}) {
  return (
    <div className='w-[30%] mb-16 font-poppins flex flex-col'>
        <img className='w-full' src={img} alt="" />
        <p className='py-2 border-b border-black'>Organized By : BLSO Nepal</p>
        <h1 className='text-xl mt-2 hover:text-first font-medium'>{title}</h1>
        <p className='my-1'>{message}</p>
    </div>
  )
}

export default EventCard