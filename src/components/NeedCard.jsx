import React from 'react'

function NeedCard({logo,title,message}) {
  return (
    <div className='w-4/12 text-center my-4 flex flex-col'>
      <div className='text-6xl w-full text-second flex justify-center my-4'>
        {logo}
      </div>
        <h1 className='text-xl font-mediumc'>{title}</h1>
        <p className=' text-gray-500'>{message}</p>
    </div>
  )
}

export default NeedCard