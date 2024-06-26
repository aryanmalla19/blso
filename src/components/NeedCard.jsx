import React from 'react'

function NeedCard({logo,title,message}) {
  return (
    <div className='w-full hover:translate-y-[-2px] transition-all sm:w-[48%] lg:w-4/12 text-center lg:my-4 flex flex-col'>
      <div className='text-6xl w-full text-second flex justify-center my-4'>
        {logo}
      </div>
        <h1 className='text-base lg:text-xl font-medium'>{title}</h1>
        <p className='lg:text-base text-sm px-4 text-gray-500'>{message}</p>
    </div>
  )
}

export default NeedCard