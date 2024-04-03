import React from 'react'

function SectionBox({logo,name,message}) {
  return (
    <div className='w-[23%] rounded-lg md:hover:translate-y-[-1px] py-5 mt-5 flex-col justify-center items-center text-black bg-white flex'>
        <div className='flex justify-start w-7/12'>
            {logo}
            <h1 className='text-2xl font-bold ml-5'>{name}</h1>
        </div>
        <h1 className='text-xl'>{message}</h1>
    </div>
  )
}

export default SectionBox