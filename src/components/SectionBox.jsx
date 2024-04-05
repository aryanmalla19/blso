import React from 'react'

function SectionBox({logo,name,message}) {
  return (
    <div className=' w-5/12 mx-auto lg:w-[23%] rounded-lg md:hover:translate-y-[-1px] py-4 mt-3 lg:mt-5 flex-col justify-center items-center text-black bg-white flex'>
        <div className='flex justify-start  lg:w-7/12'>
            {logo}
            <h1 className='text-xl lg:text-2xl font-bold ml-5'>{name}</h1>
        </div>
        <h1 className=' text-xs mt-3 lg:text-xl'>{message}</h1>
    </div>
  )
}

export default SectionBox